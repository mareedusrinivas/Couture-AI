import React, { useState } from 'react';
import { Sparkles, Download, Heart, AlertCircle, Eye, RefreshCw } from 'lucide-react';
import { saveImageToDB } from '../utils/db';

function Generate() {
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [imageBlob, setImageBlob] = useState(null);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleGenerate = async () => {
    const trimmedDesc = description.trim();
    if (!trimmedDesc) {
      setError('Please enter a clothing description.');
      return;
    }

    setLoading(true);
    setError('');
    setImageUrl('');
    setImageBlob(null);
    setSuccessMsg('');

    const apiUrl = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
      ? 'http://localhost:5000/generate'
      : '/api/generate';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputs: trimmedDesc }),
      });

      if (!response.ok) {
        throw new Error(`Server returned status: ${response.status}`);
      }

      const blob = await response.blob();
      const localUrl = URL.createObjectURL(blob);
      
      setImageBlob(blob);
      setImageUrl(localUrl);
      setLoading(false);

      // Auto-save to wardrobe IndexedDB
      try {
        const username = localStorage.getItem('loggedInUser') || 'guest';
        await saveImageToDB(username, blob);
        setSuccessMsg('Design generated and auto-saved to wardrobe!');
      } catch (saveErr) {
        console.error('Auto-save error:', saveErr);
      }
    } catch (err) {
      console.error(err);
      setError('Failed to generate image. Please make sure the backend server is running on port 5000 and try again.');
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!imageUrl) return;
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'CoutureAI_Design.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSaveToWardrobe = async () => {
    if (!imageBlob) return;
    try {
      const username = localStorage.getItem('loggedInUser') || 'guest';
      await saveImageToDB(username, imageBlob);
      setSuccessMsg('Design saved to your wardrobe successfully!');
    } catch (err) {
      console.error(err);
      setError('Could not save design to wardrobe.');
    }
  };

  return (
    <div className="page-container generate-container">
      <div className="generate-layout">
        {/* Input Sidebar Panel */}
        <div className="glass-panel sidebar-panel animate-scale-in">
          <div className="sidebar-header">
            <Sparkles className="h-5 w-5 text-purple-400" />
            <h2>Fashion Generator</h2>
          </div>
          <p className="sidebar-description">
            Type in a detailed description of the clothing garment you'd like to design. Be descriptive about materials, colors, styles, and fits.
          </p>

          <div className="input-group">
            <textarea
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                if (error) setError('');
              }}
              placeholder="E.g., A futuristic cyberpunk holographic jacket with glowing purple seams, high collar, leather sleeves, runway fashion, photorealistic..."
              rows="6"
              disabled={loading}
            />
          </div>

          {error && (
            <div className="alert alert-danger">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span className="text-xs">{error}</span>
            </div>
          )}

          {successMsg && (
            <div className="alert alert-success">
              <RefreshCw className="h-4 w-4 shrink-0 animate-spin" style={{ animationDuration: '3s' }} />
              <span className="text-xs">{successMsg}</span>
            </div>
          )}

          <button 
            onClick={handleGenerate}
            disabled={loading}
            className="btn btn-primary w-full generate-btn"
          >
            {loading ? (
              <>
                <div className="spinner-small"></div> Generating...
              </>
            ) : (
              <>
                <Sparkles className="h-5 w-5" /> Generate Design
              </>
            )}
          </button>

          {/* Action buttons shown after success */}
          {imageUrl && (
            <div className="post-generate-actions">
              <button onClick={handleDownload} className="btn btn-secondary w-full">
                <Download className="h-4 w-4 text-cyan-400" /> Download PNG
              </button>
              <button onClick={handleSaveToWardrobe} className="btn btn-secondary w-full">
                <Heart className="h-4 w-4 text-purple-400 fill-purple-400/20" /> Save to Wardrobe
              </button>
            </div>
          )}
        </div>

        {/* Output Showcase Panel */}
        <div className="showcase-panel glass-panel animate-scale-in" style={{ animationDelay: '0.1s' }}>
          {loading ? (
            <div className="showcase-state">
              <div className="pulse-loader">
                <Sparkles className="h-8 w-8 text-purple-400 animate-spin" style={{ animationDuration: '4s' }} />
              </div>
              <h3>Generating Fashion Artwork</h3>
              <p>Our generative engine is creating your custom apparel mockup. This takes about 10-15 seconds...</p>
            </div>
          ) : imageUrl ? (
            <div className="showcase-image-wrapper">
              <img src={imageUrl} alt="Generated fashion design" className="showcase-image" />
              <div className="showcase-badge">
                <Eye className="h-4 w-4" /> PREVIEW DESIGN
              </div>
            </div>
          ) : (
            <div className="showcase-state">
              <div className="empty-state-icon">
                <Sparkles className="h-10 w-10 text-purple-500/50" />
              </div>
              <h3>Showcase Terminal</h3>
              <p>Enter a description and click generate to render your custom apparel concept art here.</p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .generate-container {
          max-width: 1200px;
          padding-bottom: 60px;
        }
        .generate-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
        }
        @media (min-width: 800px) {
          .generate-layout {
            grid-template-columns: 350px 1fr;
          }
        }
        .sidebar-panel {
          padding: 30px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          border-radius: 24px;
          height: fit-content;
          background: rgba(20, 18, 38, 0.6);
          border: 1px solid rgba(168, 85, 247, 0.25);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(168, 85, 247, 0.05);
          position: relative;
          overflow: hidden;
        }
        .sidebar-panel::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #a855f7, #06b6d4);
        }
        .sidebar-header {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .sidebar-header h2 {
          font-size: 22px;
          color: white;
          font-weight: 800;
          letter-spacing: -0.01em;
        }
        .sidebar-description {
          font-size: 13px;
          line-height: 1.6;
          color: var(--text-secondary);
        }
        .input-group textarea {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(168, 85, 247, 0.2);
          border-radius: 14px;
          padding: 16px;
          line-height: 1.6;
          font-size: 14px;
          color: white;
          transition: var(--transition-smooth);
        }
        .input-group textarea:focus {
          border-color: #a855f7;
          box-shadow: 0 0 20px rgba(168, 85, 247, 0.25);
          background: rgba(255, 255, 255, 0.05);
        }
        .generate-btn {
          padding: 16px;
          font-size: 15px;
          font-weight: 700;
          background: linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #06b6d4 100%);
          background-size: 200% auto;
          color: white;
          box-shadow: 0 6px 20px rgba(168, 85, 247, 0.35);
          animation: buttonGlow 3s infinite alternate;
          transition: var(--transition-bounce);
        }
        .generate-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 10px 25px rgba(168, 85, 247, 0.6);
          background-position: right center;
        }
        @keyframes buttonGlow {
          0% { box-shadow: 0 6px 20px rgba(168, 85, 247, 0.35); }
          100% { box-shadow: 0 6px 30px rgba(6, 182, 212, 0.45); }
        }
        .spinner-small {
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-left-color: white;
          border-radius: 50%;
          width: 16px;
          height: 16px;
          animation: spin 1s linear infinite;
        }
        .post-generate-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 10px;
          animation: fadeIn 0.4s ease-out;
        }
        .showcase-panel {
          border-radius: 28px;
          min-height: 520px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 20px;
          background: rgba(14, 12, 26, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6);
          position: relative;
        }
        .showcase-panel::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 28px;
          padding: 1px;
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(6, 182, 212, 0.3));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
        .showcase-state {
          text-align: center;
          max-width: 450px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          padding: 40px;
        }
        .showcase-state h3 {
          font-size: 22px;
          color: white;
          font-weight: 800;
          letter-spacing: -0.01em;
        }
        .showcase-state p {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.7;
        }
        .empty-state-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(168, 85, 247, 0.08);
          border: 1px dashed rgba(168, 85, 247, 0.3);
          margin-bottom: 8px;
          box-shadow: 0 0 20px rgba(168, 85, 247, 0.1);
        }
        .pulse-loader {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(168, 85, 247, 0.15);
          animation: pulse-glow 1.5s infinite alternate;
          margin-bottom: 8px;
        }
        @keyframes pulse-glow {
          0% { box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.5); transform: scale(0.95); }
          100% { box-shadow: 0 0 30px 15px rgba(6, 182, 212, 0.2); transform: scale(1.05); }
        }
        .showcase-image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          max-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          overflow: hidden;
          padding: 10px;
        }
        .showcase-image {
          max-width: 100%;
          max-height: 530px;
          object-fit: contain;
          border-radius: 16px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.8), 0 0 30px rgba(168,85,247,0.15);
          border: 1px solid rgba(255,255,255,0.08);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .showcase-image:hover {
          transform: scale(1.03);
        }
        .showcase-badge {
          position: absolute;
          top: 24px;
          right: 24px;
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(14, 12, 26, 0.85);
          border: 1px solid rgba(168, 85, 247, 0.35);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: white;
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }
      `}</style>
    </div>
  );
}

export default Generate;
