import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Shirt, Sparkles, AlertTriangle, ArrowLeft } from 'lucide-react';
import { 
  getImagesFromDB, 
  deleteImageFromDB, 
  clearWardrobeFromDB, 
  migrateLocalStorageToDB 
} from '../utils/db';

function Wardrobe() {
  const [images, setImages] = useState([]);
  const [deletingIndex, setDeletingIndex] = useState(null);

  useEffect(() => {
    const loadWardrobe = async () => {
      const username = localStorage.getItem('loggedInUser') || 'guest';
      await migrateLocalStorageToDB(username);
      try {
        const dbItems = await getImagesFromDB(username);
        const mappedItems = dbItems.map(item => ({
          id: item.id,
          src: URL.createObjectURL(item.image)
        }));
        setImages(mappedItems);
      } catch (err) {
        console.error('Failed to load wardrobe:', err);
      }
    };
    loadWardrobe();
  }, []);

  const handleRemoveItem = (id, index) => {
    setDeletingIndex(index);
    // Wait for fadeout animation before removal
    setTimeout(async () => {
      try {
        await deleteImageFromDB(id);
        setImages(prev => prev.filter((_, idx) => idx !== index));
        setDeletingIndex(null);
      } catch (err) {
        console.error('Failed to delete item:', err);
      }
    }, 300);
  };

  const handleClearWardrobe = async () => {
    if (window.confirm('Are you sure you want to clear your entire wardrobe? This action cannot be undone.')) {
      try {
        const username = localStorage.getItem('loggedInUser') || 'guest';
        await clearWardrobeFromDB(username);
        setImages([]);
      } catch (err) {
        console.error('Failed to clear wardrobe:', err);
      }
    }
  };

  return (
    <div className="page-container wardrobe-container">
      {/* Page Header */}
      <div className="wardrobe-header animate-fade-in">
        <div className="flex justify-between items-center w-full flex-wrap gap-4">
          <div>
            <h1>My Virtual Wardrobe</h1>
            <p>Collection of your custom AI-generated fashion creations.</p>
          </div>
          {images.length > 0 && (
            <button 
              onClick={handleClearWardrobe}
              className="btn btn-danger flex items-center gap-2"
            >
              <Trash2 className="h-4 w-4" /> Clear Wardrobe
            </button>
          )}
        </div>
      </div>

      {images.length === 0 ? (
        <div className="glass-panel empty-wardrobe animate-scale-in">
          <div className="empty-icon-circle">
            <Shirt className="h-8 w-8 text-purple-400" />
          </div>
          <h2>Your Wardrobe is Empty</h2>
          <p>
            You haven't saved any custom designs yet. Head over to the Cloth Generator to render your first styling concept!
          </p>
          <Link to="/services/generate" className="btn btn-primary mt-4">
            <Sparkles className="h-4 w-4" /> Create New Design
          </Link>
        </div>
      ) : (
        <div className="wardrobe-grid">
          {images.map((item, index) => (
            <div 
              key={item.id || index} 
              className={`glass-panel wardrobe-card ${deletingIndex === index ? 'fade-out-item' : 'animate-scale-in'}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="card-image-wrapper">
                <img src={item.src} alt={`Saved clothing ${index + 1}`} className="wardrobe-image" />
              </div>
              <div className="card-footer">
                <span className="card-index-tag">Design #{index + 1}</span>
                <button 
                  onClick={() => handleRemoveItem(item.id, index)}
                  className="remove-btn-icon"
                  title="Remove design"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="navigation-footer">
        <Link to="/services/generate" className="back-navigation">
          <ArrowLeft className="h-4 w-4" /> Back to CoutureAI Generator
        </Link>
      </div>

      <style>{`
        .wardrobe-container {
          max-width: 1100px;
          padding-bottom: 80px;
        }
        .wardrobe-header {
          margin-bottom: 40px;
          border-bottom: 1px solid rgba(168, 85, 247, 0.15);
          padding-bottom: 24px;
        }
        .wardrobe-header h1 {
          font-size: 36px;
          color: white;
          margin-bottom: 8px;
          font-weight: 800;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #ffffff 0%, #c084fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .wardrobe-header p {
          color: var(--text-secondary);
          font-size: 15px;
          line-height: 1.6;
        }
        .empty-wardrobe {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 60px 40px;
          max-width: 550px;
          margin: 40px auto;
          border-radius: 28px;
          gap: 16px;
          background: rgba(20, 18, 38, 0.4);
          border: 1px solid rgba(168, 85, 247, 0.2);
          box-shadow: 0 12px 40px rgba(0,0,0,0.4);
        }
        .empty-icon-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 76px;
          height: 76px;
          border-radius: 50%;
          background: rgba(168, 85, 247, 0.1);
          border: 1px solid rgba(168, 85, 247, 0.3);
          box-shadow: 0 0 20px rgba(168, 85, 247, 0.15);
        }
        .empty-wardrobe h2 {
          font-size: 24px;
          color: white;
          font-weight: 800;
        }
        .empty-wardrobe p {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.7;
        }
        .wardrobe-grid {
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          gap: 30px;
        }
        @media (min-width: 600px) {
          .wardrobe-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (min-width: 900px) {
          .wardrobe-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        .wardrobe-card {
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 380px;
          background: rgba(20, 18, 38, 0.55);
          border: 1px solid rgba(168, 85, 247, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
          transition: var(--transition-bounce);
          position: relative;
        }
        .wardrobe-card::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 24px;
          padding: 1px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(168, 85, 247, 0.2));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
        .wardrobe-card:hover {
          transform: translateY(-8px);
          border-color: rgba(168, 85, 247, 0.6);
          box-shadow: 0 15px 35px rgba(168, 85, 247, 0.25), 0 0 20px rgba(6, 182, 212, 0.1);
        }
        .card-image-wrapper {
          flex-grow: 1;
          position: relative;
          background: #080612;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 24px 24px 0 0;
        }
        .wardrobe-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .wardrobe-card:hover .wardrobe-image {
          transform: scale(1.08);
        }
        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 24px;
          background: rgba(14, 12, 26, 0.9);
          border-top: 1px solid rgba(168, 85, 247, 0.2);
          z-index: 2;
        }
        .card-index-tag {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: #c084fc;
        }
        .remove-btn-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.25);
          color: #fca5a5;
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        .remove-btn-icon:hover {
          background: var(--danger);
          border-color: var(--danger);
          color: white;
          box-shadow: 0 0 12px rgba(239, 68, 68, 0.6);
          transform: scale(1.15);
        }
        .fade-out-item {
          opacity: 0;
          transform: scale(0.9);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .navigation-footer {
          margin-top: 48px;
          text-align: center;
        }
        .back-navigation {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          color: var(--primary);
        }
        .back-navigation:hover {
          color: #c084fc;
          text-decoration: underline;
        }
        .mt-4 {
          margin-top: 16px;
        }
      `}</style>
    </div>
  );
}

export default Wardrobe;
