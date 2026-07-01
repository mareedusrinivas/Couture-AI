import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Shirt, MessageSquare, Users, ArrowRight } from 'lucide-react';

function Dashboard() {
  const loggedInUser = localStorage.getItem('loggedInUser') || 'Fashionista';

  return (
    <div className="page-container">
      <div className="welcome-banner glass-panel animate-fade-in">
        <div className="banner-content">
          <span className="banner-badge">FASHION DASHBOARD</span>
          <h1>Welcome, {loggedInUser}!</h1>
          <p>
            CoutureAI is your personal AI fashion playground. Describe any apparel or concept to instantly render high-fidelity garment renders, and save them directly in your digital closet.
          </p>
        </div>
        <div className="banner-glow-circle"></div>
      </div>

      <h2 className="section-title">Explore Services</h2>
      
      <div className="services-grid">
        {/* Card 1: Generation */}
        <div className="glass-panel service-card animate-scale-in" style={{ animationDelay: '0.1s' }}>
          <div className="card-header-icon bg-purple-500/10 border-purple-500/20 text-purple-400">
            <Sparkles className="h-6 w-6" />
          </div>
          <h3>Cloth Generator</h3>
          <p>Translate clothing ideas into realistic mockups using state-of-the-art AI inference pipelines.</p>
          <Link to="/services/generate" className="card-link text-purple-400 hover:text-purple-300">
            Generate Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Card 2: Wardrobe */}
        <div className="glass-panel service-card animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <div className="card-header-icon bg-cyan-500/10 border-cyan-500/20 text-cyan-400">
            <Shirt className="h-6 w-6" />
          </div>
          <h3>Virtual Wardrobe</h3>
          <p>Browse saved fashion items, export high-definition PNG files, or clean up your custom collections.</p>
          <Link to="/services/wardrobe" className="card-link text-cyan-400 hover:text-cyan-300">
            Open Closet <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Card 3: Team */}
        <div className="glass-panel service-card animate-scale-in" style={{ animationDelay: '0.3s' }}>
          <div className="card-header-icon bg-blue-500/10 border-blue-500/20 text-blue-400">
            <Users className="h-6 w-6" />
          </div>
          <h3>Meet the Team</h3>
          <p>Learn more about CoutureAI's development founders and connect with them on professional networks.</p>
          <Link to="/team" className="card-link text-blue-400 hover:text-blue-300">
            Meet Creators <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Card 4: Feedback */}
        <div className="glass-panel service-card animate-scale-in" style={{ animationDelay: '0.4s' }}>
          <div className="card-header-icon bg-pink-500/10 border-pink-500/20 text-pink-400">
            <MessageSquare className="h-6 w-6" />
          </div>
          <h3>Feedback Center</h3>
          <p>Share your platform feedback, submit feature requests, or report design bugs to our team.</p>
          <Link to="/feedback" className="card-link text-pink-400 hover:text-pink-300">
            Submit Feedback <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <style>{`
        .welcome-banner {
          position: relative;
          padding: 48px;
          border-radius: 24px;
          overflow: hidden;
          margin-bottom: 40px;
          border-color: rgba(168, 85, 247, 0.3);
        }
        .banner-content {
          position: relative;
          z-index: 2;
          max-width: 640px;
        }
        .banner-badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--primary);
          background: rgba(168, 85, 247, 0.1);
          padding: 6px 12px;
          border-radius: 20px;
          margin-bottom: 16px;
        }
        .welcome-banner h1 {
          font-size: 36px;
          margin-bottom: 12px;
          color: white;
        }
        .welcome-banner p {
          font-size: 16px;
          line-height: 1.6;
          color: var(--text-secondary);
        }
        .banner-glow-circle {
          position: absolute;
          top: -50px;
          right: -50px;
          width: 250px;
          height: 250px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%);
          filter: blur(40px);
          pointer-events: none;
          z-index: 1;
        }
        .section-title {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 24px;
          letter-spacing: -0.01em;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          gap: 24px;
          padding-bottom: 60px;
        }
        @media (min-width: 640px) {
          .services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (min-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }
        .service-card {
          padding: 32px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          border-radius: 20px;
        }
        .service-card:hover {
          transform: translateY(-4px);
        }
        .card-header-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px;
          border-radius: 12px;
          border: 1px solid;
        }
        .service-card h3 {
          font-size: 18px;
          font-weight: 700;
          color: white;
        }
        .service-card p {
          font-size: 14px;
          line-height: 1.5;
          color: var(--text-secondary);
          flex-grow: 1;
        }
        .card-link {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 600;
          margin-top: 8px;
          transition: var(--transition-smooth);
        }
        .card-link svg {
          transition: transform 0.3s ease;
        }
        .card-link:hover svg {
          transform: translateX(4px);
        }
        .bg-blue-500\\/10 { background-color: rgba(59, 130, 246, 0.1); }
        .border-blue-500\\/20 { border: 1px solid rgba(59, 130, 246, 0.2); }
        .text-blue-400 { color: #60a5fa; }
        .bg-pink-500\\/10 { background-color: rgba(236, 72, 153, 0.1); }
        .border-pink-500\\/20 { border: 1px solid rgba(236, 72, 153, 0.2); }
        .text-pink-400 { color: #f472b6; }
        .bg-cyan-500\\/10 { background-color: rgba(6, 182, 212, 0.1); }
        .border-cyan-500\\/20 { border: 1px solid rgba(6, 182, 212, 0.2); }
        .text-cyan-400 { color: #22d3ee; }
      `}</style>
    </div>
  );
}

export default Dashboard;
