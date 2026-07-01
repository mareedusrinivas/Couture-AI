import React, { useState } from 'react';
import { Users, Linkedin, ChevronDown, CheckCircle, ChevronUp } from 'lucide-react';

const TEAM_MEMBERS = [
  {
    id: 'abhiram',
    name: 'Malraju Abhiram',
    shortName: 'Abhiram',
    role: 'Team Leader',
    linkedin: 'https://www.linkedin.com/in/abhiram-malraju/',
    bio: 'Abhiram coordinates project deliverables, handles architecture definition, and oversees overall CoutureAI product design. He ensures frontend design is aligned with modern standards.'
  },
  {
    id: 'srinivas',
    name: 'Mareedu Srinivas',
    shortName: 'Srinivas',
    role: 'Core Developer',
    linkedin: 'https://www.linkedin.com/in/mareedu-srinivas-8a80872a5/',
    bio: 'Srinivas manages local state integration, API request processing, image loading states, and backend route validation. He is responsible for migrating HTML to React architecture.'
  },
  {
    id: 'uday',
    name: 'Pabboju Uday Chary',
    shortName: 'Uday Chary',
    role: 'Frontend Architect',
    linkedin: 'https://www.linkedin.com/in/pabboju-uday-23157b286/',
    bio: 'Uday designs custom micro-animations, glassmorphism layouts, and styles global visual systems. He ensures responsiveness on various mobile breakpoints.'
  },
  {
    id: 'kishor',
    name: 'Koyyala Nagendra Kishor',
    shortName: 'Kishor',
    role: 'System Engineer',
    linkedin: 'https://www.linkedin.com/in/nagendra-kishor-66a0872a5/',
    bio: 'Kishor manages database records, local caches, and the Hugging Face FLUX inference model queries. He resolves response latencies and server bugs.'
  }
];

function Team() {
  const [activeId, setActiveId] = useState(null);

  const toggleDetails = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="page-container team-container">
      {/* Page Header */}
      <div className="team-header animate-fade-in">
        <div className="header-badge">
          <Users className="h-4 w-4" /> OUR CREATORS
        </div>
        <h1>Meet Our Team</h1>
        <p>The engineering minds behind the CoutureAI generative workspace.</p>
      </div>

      {/* Grid of Team Cards */}
      <div className="team-grid">
        {TEAM_MEMBERS.map((member, index) => {
          const isExpanded = activeId === member.id;
          return (
            <div 
              key={member.id}
              className={`glass-panel member-card ${isExpanded ? 'card-active' : ''} animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="avatar-placeholder">
                <span className="avatar-initials">{member.shortName[0]}</span>
              </div>
              
              <h3>{member.shortName}</h3>
              <span className="member-role">{member.role}</span>
              
              <button 
                onClick={() => toggleDetails(member.id)}
                className={`btn btn-secondary details-toggle-btn ${isExpanded ? 'active' : ''}`}
              >
                {isExpanded ? 'Hide Info' : 'Show Info'} 
                {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>
            </div>
          );
        })}
      </div>

      {/* Slide down detailed panel */}
      {activeId && (
        <div className="glass-panel details-drawer animate-scale-in">
          {(() => {
            const member = TEAM_MEMBERS.find(m => m.id === activeId);
            return (
              <div className="drawer-inner">
                <div className="drawer-meta">
                  <h2>{member.name}</h2>
                  <span className="drawer-role-badge">{member.role}</span>
                </div>
                <p className="drawer-bio">{member.bio}</p>
                <div className="drawer-footer">
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noreferrer"
                    className="linkedin-profile-link"
                  >
                    <Linkedin className="h-4 w-4" /> Connect on LinkedIn
                  </a>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      <style>{`
        .team-container {
          max-width: 1000px;
          padding-bottom: 80px;
        }
        .team-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .team-header h1 {
          font-size: 36px;
          color: white;
          margin-bottom: 8px;
        }
        .team-header p {
          color: var(--text-secondary);
          font-size: 16px;
        }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          gap: 24px;
          margin-bottom: 40px;
        }
        @media (min-width: 500px) {
          .team-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (min-width: 900px) {
          .team-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }
        .member-card {
          padding: 30px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border-radius: 20px;
          transition: var(--transition-bounce);
        }
        .member-card:hover {
          transform: translateY(-6px);
          border-color: var(--primary);
          box-shadow: 0 10px 24px rgba(168, 85, 247, 0.2);
        }
        .card-active {
          border-color: var(--primary);
          background: rgba(168, 85, 247, 0.05);
          box-shadow: 0 10px 24px rgba(168, 85, 247, 0.15);
        }
        .avatar-placeholder {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary) 0%, #4f46e5 100%);
          margin-bottom: 18px;
          box-shadow: 0 8px 16px rgba(168, 85, 247, 0.3);
        }
        .avatar-initials {
          font-size: 24px;
          font-weight: 700;
          color: white;
        }
        .member-card h3 {
          font-size: 18px;
          color: white;
          margin-bottom: 4px;
        }
        .member-role {
          font-size: 13px;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }
        .details-toggle-btn {
          width: 100%;
          padding: 8px 16px;
          font-size: 13px;
          border-radius: 20px;
        }
        .details-toggle-btn.active {
          background: rgba(168, 85, 247, 0.2);
          border-color: var(--primary);
          color: white;
        }
        .details-drawer {
          border-radius: 20px;
          padding: 30px;
          margin-top: 24px;
          animation: scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          border-color: rgba(168, 85, 247, 0.3);
          box-shadow: 0 10px 30px rgba(168, 85, 247, 0.1);
        }
        .drawer-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }
        .drawer-meta h2 {
          font-size: 22px;
          color: white;
        }
        .drawer-role-badge {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: var(--primary);
          background: rgba(168, 85, 247, 0.1);
          padding: 4px 10px;
          border-radius: 12px;
          text-transform: uppercase;
        }
        .drawer-bio {
          font-size: 14px;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 24px;
          max-width: 800px;
        }
        .linkedin-profile-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 20px;
          border: 1px solid #0077b5;
          color: #7dd3fc;
          background: rgba(0, 119, 181, 0.1);
          font-size: 13px;
          font-weight: 600;
          transition: var(--transition-smooth);
        }
        .linkedin-profile-link:hover {
          background: #0077b5;
          color: white;
          box-shadow: 0 4px 15px rgba(0, 119, 181, 0.4);
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}

export default Team;
