import React from 'react';
import { Info, Sparkles, Target, Compass } from 'lucide-react';

function About() {
  return (
    <div className="page-container">
      {/* Page Header */}
      <div className="about-header animate-fade-in">
        <div className="header-badge">
          <Info className="h-4 w-4" /> ABOUT COUTURE AI
        </div>
        <h1>Our Vision & Solution</h1>
        <p>Bridging the gap between fashion imagination and physical reality.</p>
      </div>

      {/* Main Content Layout */}
      <div className="about-grid">
        {/* Panel 1: About the Platform */}
        <div className="glass-panel about-panel animate-scale-in" style={{ animationDelay: '0.1s' }}>
          <div className="panel-icon bg-purple-500/10 text-purple-400">
            <Compass className="h-6 w-6" />
          </div>
          <h2>About CoutureAI</h2>
          <div className="divider"></div>
          <p className="panel-text">
            CoutureAI is an innovative platform designed to bridge the gap between fashion imagination and reality. It allows users to generate highly realistic clothing images based on text descriptions, empowering individuals to visualize their unique styles. 
          </p>
          <p className="panel-text">
            By leveraging AI-powered image generation, CoutureAI enhances the shopping experience, making it more interactive and customizable. Users can create, save, and refine their clothing concepts, ensuring a seamless journey from idea to design. Future integrations with AI-driven tools will further expand the platform's capabilities, enabling users to bring their dream outfits to life with greater accuracy and personalization.
          </p>
        </div>

        {/* Panel 2: The Solution */}
        <div className="glass-panel about-panel animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <div className="panel-icon bg-cyan-500/10 text-cyan-400">
            <Target className="h-6 w-6" />
          </div>
          <h2>Our Solution</h2>
          <div className="divider"></div>
          <p className="panel-text">
            This solution directly addresses the challenge of providing personalized visual representations of clothing for online shoppers. Traditional shopping platforms often lack the ability to generate images based on specific user requests, leading to a gap between imagination and reality.
          </p>
          <p className="panel-text">
            By enabling customers to visualize their unique clothing ideas, CoutureAI enhances the shopping experience, making it more engaging and satisfying. This personalized experience not only helps users refine their designs but also enables them to confidently share their visions with tailors for custom creations, thereby expanding their shopping possibilities and improving customer satisfaction. Ultimately, CoutureAI helps bridge the gap in fashion design, fulfilling user needs and aligning with the growing demand for customized clothing.
          </p>
        </div>
      </div>

      <style>{`
        .about-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--primary);
          background: rgba(168, 85, 247, 0.1);
          padding: 6px 12px;
          border-radius: 20px;
          margin-bottom: 16px;
          text-transform: uppercase;
        }
        .about-header h1 {
          font-size: 38px;
          color: white;
          margin-bottom: 8px;
        }
        .about-header p {
          color: var(--text-secondary);
          font-size: 16px;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          padding-bottom: 80px;
        }
        @media (min-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .about-panel {
          padding: 40px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          border-radius: 24px;
        }
        .panel-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 14px;
          border-radius: 16px;
          margin-bottom: 24px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .about-panel h2 {
          font-size: 24px;
          font-weight: 700;
          color: white;
          margin-bottom: 12px;
        }
        .divider {
          width: 60px;
          height: 3px;
          background: var(--primary);
          border-radius: 2px;
          margin-bottom: 24px;
        }
        .panel-text {
          font-size: 15px;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 16px;
        }
        .panel-text:last-child {
          margin-bottom: 0;
        }
      `}</style>
    </div>
  );
}

export default About;
