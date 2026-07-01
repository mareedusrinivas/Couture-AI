import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Shirt, Shield, Eye, ArrowRight } from 'lucide-react';

function Landing() {
  return (
    <div className="page-container flex flex-col justify-center items-center text-center">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-24">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-semibold mb-8 animate-fade-in">
          <Sparkles className="h-4 w-4 text-purple-400" />
          Introducing CoutureAI V2
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
          Generate Prompt to <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            Clothing Design
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
          CoutureAI is an AI-powered fashion design platform that generates realistic clothing images based on user descriptions. Instantly visualize custom creations, perfect for fashion designers, shoppers, and styling enthusiasts.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <Link 
            to="/login" 
            className="btn btn-primary px-8 py-4 text-lg font-bold flex items-center gap-2"
          >
            Get Started <ArrowRight className="h-5 w-5" />
          </Link>
          <Link 
            to="/login" 
            className="btn btn-secondary px-8 py-4 text-lg font-bold"
          >
            Explore Gallery
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Card 1 */}
          <div className="glass-panel p-8 flex flex-col gap-4">
            <div className="p-3 w-fit rounded-xl bg-purple-500/10 border border-purple-500/20">
              <Sparkles className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white">AI Clothes Generation</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Describe your dream apparel and let our cutting-edge neural models render high-definition designs instantly.
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass-panel p-8 flex flex-col gap-4">
            <div className="p-3 w-fit rounded-xl bg-cyan-500/10 border border-cyan-500/20">
              <Shirt className="h-6 w-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Virtual Wardrobe</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Collect, manage, and download your favorite designs persistently. Keep inspiration organized in your custom virtual closet.
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-panel p-8 flex flex-col gap-4">
            <div className="p-3 w-fit rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <Shield className="h-6 w-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Design Sharing</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Share generated outputs directly with custom tailors or boutiques to simplify sizing and bring designs to physical life.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .max-w-4xl { max-width: 56rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
        .py-24 { padding-top: 6rem; padding-bottom: 6rem; }
        .px-4 { padding-left: 1rem; padding-right: 1rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-12 { margin-bottom: 3rem; }
        .mb-20 { margin-bottom: 5rem; }
        .text-4xl { font-size: 2.25rem; }
        .text-lg { font-size: 1.125rem; }
        .max-w-2xl { max-width: 42rem; }
        .grid { display: grid; }
        .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        .gap-6 { gap: 24px; }
        .p-8 { padding: 2rem; }
        .text-xl { font-size: 1.25rem; }
        
        @media (min-width: 768px) {
          .md\\:py-24 { padding-top: 6rem; padding-bottom: 6rem; }
          .md\\:text-7xl { font-size: 4.5rem; }
          .md\\:text-xl { font-size: 1.25rem; }
          .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        
        /* Gradients fallbacks */
        .bg-clip-text { -webkit-background-clip: text; background-clip: text; }
        .text-transparent { -webkit-text-fill-color: transparent; text-fill-color: transparent; }
        .bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
        .from-white { --tw-gradient-from: #ffffff; --tw-gradient-to: rgba(255, 255, 255, 0); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
        .via-purple-200 { --tw-gradient-to: rgba(233, 213, 255, 0); --tw-gradient-stops: var(--tw-gradient-from), #e9d5ff, var(--tw-gradient-to); }
        .to-purple-400 { --tw-gradient-to: #c084fc; }
        
        .from-purple-400 { --tw-gradient-from: #c084fc; --tw-gradient-to: rgba(192, 132, 252, 0); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
        .via-pink-400 { --tw-gradient-to: rgba(244, 114, 182, 0); --tw-gradient-stops: var(--tw-gradient-from), #f472b6, var(--tw-gradient-to); }
        .to-indigo-400 { --tw-gradient-to: #818cf8; }
      `}</style>
    </div>
  );
}

export default Landing;
