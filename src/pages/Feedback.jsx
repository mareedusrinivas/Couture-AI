import React, { useState } from 'react';
import { Star, MessageSquare, Check, AlertCircle } from 'lucide-react';

function Feedback() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const username = localStorage.getItem('loggedInUser');
    if (!username) {
      setError('Please sign in first to submit feedback.');
      return;
    }

    const trimmedFeedback = feedbackText.trim();
    if (!trimmedFeedback) {
      setError('Feedback comments cannot be empty.');
      return;
    }

    if (rating === 0) {
      setError('Please select a star rating.');
      return;
    }

    // Save feedback to local storage
    const feedbackObj = {
      rating,
      comment: trimmedFeedback,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem(`feedback_${username}`, JSON.stringify(feedbackObj));
    setSubmitted(true);
  };

  return (
    <div className="page-container feedback-container">
      {/* Header */}
      <div className="feedback-header animate-fade-in">
        <div className="header-badge">
          <MessageSquare className="h-4 w-4" /> FEEDBACK CENTER
        </div>
        <h1>We Value Your Feedback</h1>
        <p>Help us improve CoutureAI by sharing your experience or suggesting new features.</p>
      </div>

      {!submitted ? (
        <div className="glass-panel feedback-card animate-scale-in">
          <form onSubmit={handleSubmit} className="feedback-form">
            
            {/* Interactive Rating Component */}
            <div className="rating-selector">
              <label>How would you rate your experience?</label>
              <div className="stars-row">
                {[1, 2, 3, 4, 5].map((starNum) => {
                  const isHighlighted = (hoverRating || rating) >= starNum;
                  return (
                    <button
                      key={starNum}
                      type="button"
                      className="star-btn"
                      onClick={() => setRating(starNum)}
                      onMouseEnter={() => setHoverRating(starNum)}
                      onMouseLeave={() => setHoverRating(0)}
                    >
                      <Star 
                        className={`h-8 w-8 star-icon ${isHighlighted ? 'star-active' : ''}`} 
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Comment Area */}
            <div className="input-group">
              <label htmlFor="comments">Write your comments or suggestions</label>
              <textarea
                id="comments"
                value={feedbackText}
                onChange={(e) => {
                  setFeedbackText(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Share your thoughts on design quality, UI performance, feature suggestions, or bugs..."
                rows="6"
                required
              />
            </div>

            {error && (
              <div className="alert alert-danger">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button type="submit" className="btn btn-primary submit-btn">
              Submit Feedback
            </button>

          </form>
        </div>
      ) : (
        <div className="glass-panel success-card animate-scale-in">
          <div className="checkmark-circle">
            <svg className="checkmark-svg" viewBox="0 0 52 52">
              <circle className="checkmark-circle-path" cx="26" cy="26" r="25" fill="none" />
              <path className="checkmark-check-path" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
          </div>
          <h2>Thank You!</h2>
          <p>Your feedback has been submitted successfully. We appreciate your suggestions and support in improving the platform.</p>
          <button 
            onClick={() => {
              setSubmitted(false);
              setRating(0);
              setFeedbackText('');
            }}
            className="btn btn-secondary mt-4"
          >
            Submit Another Feedback
          </button>
        </div>
      )}

      <style>{`
        .feedback-container {
          max-width: 650px;
          padding-bottom: 80px;
        }
        .feedback-header {
          text-align: center;
          margin-bottom: 40px;
        }
        .feedback-header h1 {
          font-size: 32px;
          color: white;
          margin-bottom: 8px;
        }
        .feedback-header p {
          color: var(--text-secondary);
          font-size: 15px;
        }
        .feedback-card {
          padding: 40px;
          border-radius: 24px;
        }
        .feedback-form {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .rating-selector {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 10px 0;
        }
        .rating-selector label {
          font-size: 15px;
          font-weight: 600;
          color: white;
        }
        .stars-row {
          display: flex;
          gap: 8px;
        }
        .star-btn {
          background: none;
          border: none;
          padding: 4px;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .star-btn:hover {
          transform: scale(1.2);
        }
        .star-icon {
          color: rgba(255, 255, 255, 0.15);
          fill: transparent;
          transition: var(--transition-smooth);
        }
        .star-active {
          color: #eab308;
          fill: #eab308;
          filter: drop-shadow(0 0 8px rgba(234, 179, 8, 0.5));
        }
        .input-group label {
          font-size: 14px;
          font-weight: 600;
          color: white;
          margin-bottom: 8px;
          display: block;
        }
        .submit-btn {
          width: 100%;
          padding: 14px;
        }
        
        /* Success Screen checkmark animation */
        .success-card {
          text-align: center;
          padding: 50px 40px;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
        }
        .success-card h2 {
          font-size: 26px;
          color: white;
        }
        .success-card p {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 400px;
        }
        .checkmark-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: block;
          stroke-width: 2;
          stroke: #10b981;
          stroke-miterlimit: 10;
          box-shadow: inset 0px 0px 0px #10b981;
          animation: checkmark-fill .4s ease-in-out .4s forwards, checkmark-scale .3s ease-in-out 0s both;
        }
        .checkmark-svg {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: block;
          stroke-width: 4;
          stroke: #10b981;
          stroke-miterlimit: 10;
        }
        .checkmark-circle-path {
          stroke-dasharray: 166;
          stroke-dashoffset: 166;
          stroke-width: 4;
          stroke-miterlimit: 10;
          stroke: #10b981;
          fill: none;
          animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
        }
        .checkmark-check-path {
          transform-origin: 50% 50%;
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
          stroke: white;
          animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
        }
        
        @keyframes stroke {
          100% { stroke-dashoffset: 0; }
        }
        @keyframes checkmark-scale {
          0%, 100% { transform: none; }
          50% { transform: scale3d(1.1, 1.1, 1); }
        }
        @keyframes checkmark-fill {
          100% { box-shadow: inset 0px 0px 0px 40px #10b981; }
        }
        .mt-4 {
          margin-top: 16px;
        }
      `}</style>
    </div>
  );
}

export default Feedback;
