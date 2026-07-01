import fetch from "node-fetch";

const API_KEY = process.env.HF_API_KEY;
const HF_MODEL = process.env.HF_MODEL || "black-forest-labs/FLUX.1-schnell";
const API_URL = process.env.HF_API_URL || `https://api-inference.huggingface.co/models/${HF_MODEL}`;
const isMockMode = API_KEY === "YOUR_HUGGING_FACE_API_KEY" || !API_KEY;

function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
}

function generateFallbackSVG(inputs) {
    const words = inputs.split(" ");
    let lines = [];
    let currentLine = "";
    for (let word of words) {
        if ((currentLine + " " + word).length > 40) {
            lines.push(currentLine);
            currentLine = word;
        } else {
            currentLine = currentLine ? currentLine + " " + word : word;
        }
    }
    if (currentLine) lines.push(currentLine);
    lines = lines.slice(0, 3);

    const tspans = lines.map((line, idx) => 
        `<tspan x="256" y="${360 + idx * 24}">${escapeHtml(line)}</tspan>`
    ).join("\n");

    return `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a051b" />
      <stop offset="100%" stop-color="#0c0c1e" />
    </linearGradient>
    <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#a855f7" />
      <stop offset="100%" stop-color="#06b6d4" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)" />
  <rect x="20" y="20" width="472" height="472" rx="20" fill="none" stroke="url(#glow)" stroke-width="2" opacity="0.8" />
  
  <g transform="translate(180, 80) scale(0.3)" stroke="url(#glow)" stroke-width="4" fill="none" opacity="0.6">
    <path d="M 256,100 L 350,150 L 320,380 L 192,380 L 162,150 Z" />
    <path d="M 256,40 L 256,100" />
    <circle cx="256" cy="30" r="10" />
  </g>

  <text x="256" y="260" text-anchor="middle" fill="#ffffff" font-family="'Outfit', sans-serif" font-weight="800" font-size="28" letter-spacing="2">COUTURE AI</text>
  <text x="256" y="290" text-anchor="middle" fill="#a855f7" font-family="'Inter', sans-serif" font-weight="600" font-size="14" letter-spacing="1">[ OFFLINE / FALLBACK MODE ]</text>
  
  <rect x="50" y="325" width="412" height="120" rx="10" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.05)" />
  <text x="256" y="360" text-anchor="middle" fill="#e2e8f0" font-family="'Inter', sans-serif" font-size="14" font-style="italic">
    ${tspans}
  </text>
</svg>`;
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { inputs } = req.body;

  if (!inputs) {
    return res.status(400).json({ error: "Missing clothing description" });
  }

  const enhancedPrompt = `A professional fashion model wearing ${inputs}, studio fashion catalog photography, high-end apparel photoshoot, clean minimal studio background, full body shot, 8k resolution, photorealistic, highly detailed fabric textures, sharp focus`;

  if (isMockMode) {
    try {
      const mockResponse = await fetch("https://picsum.photos/512/512");
      if (!mockResponse.ok) {
        throw new Error(`Failed to fetch placeholder image: ${mockResponse.statusText}`);
      }
      const imageBuffer = await mockResponse.arrayBuffer();
      res.setHeader("Content-Type", "image/jpeg");
      return res.send(Buffer.from(imageBuffer));
    } catch (error) {
      const svgContent = generateFallbackSVG(inputs);
      res.setHeader("Content-Type", "image/svg+xml");
      return res.send(Buffer.from(svgContent));
    }
  }

  try {
    const seed = Math.floor(Math.random() * 10000000);
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        "x-use-cache": "false"
      },
      body: JSON.stringify({ 
        inputs: enhancedPrompt,
        parameters: { seed }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API Error ${response.status}: ${errorText}`);
    }

    const imageBuffer = await response.arrayBuffer();
    res.setHeader("Content-Type", "image/png");
    return res.send(Buffer.from(imageBuffer));
  } catch (error) {
    const svgContent = generateFallbackSVG(inputs);
    res.setHeader("Content-Type", "image/svg+xml");
    return res.send(Buffer.from(svgContent));
  }
}
