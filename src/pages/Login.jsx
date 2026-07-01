import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, User, AlertCircle, CheckCircle } from 'lucide-react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const trimmedUser = username.trim();
    const trimmedPass = password.trim();

    if (!trimmedUser || !trimmedPass) {
      setError('Please fill in all fields.');
      return;
    }

    // Load users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || {};

    if (users[trimmedUser] && users[trimmedUser].password === trimmedPass) {
      setSuccess('Login successful! Redirecting...');
      setTimeout(() => {
        onLogin(trimmedUser);
        navigate('/dashboard');
      }, 1000);
    } else {
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="glass-panel login-card animate-fade-in">
        <h2 className="card-title">Welcome Back</h2>
        <p className="card-subtitle">Enter your credentials to login</p>

        {error && (
          <div className="alert alert-danger">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="alert alert-success">
            <CheckCircle className="h-4 w-4 shrink-0" />
            <span>{success}</span>
          </div>
        )}

        <form onSubmit={handleLoginSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <div className="input-icon-wrapper">
              <User className="input-icon" />
              <input 
                type="text" 
                id="username" 
                placeholder="Enter username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required 
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="input-icon-wrapper">
              <Lock className="input-icon" />
              <input 
                type="password" 
                id="password" 
                placeholder="Enter password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-full submit-btn">
            Login
          </button>
        </form>

        <p className="redirect-text">
          Don't have an account? <Link to="/register" className="redirect-link">Register here</Link>
        </p>
      </div>

      <style>{`
        .login-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 20px;
          background: radial-gradient(circle at center, #0f0c24 0%, #06050c 100%);
        }
        .login-card {
          width: 100%;
          max-width: 420px;
          padding: 40px;
          border-radius: 20px;
          text-align: center;
        }
        .card-title {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 8px;
          color: white;
        }
        .card-subtitle {
          color: var(--text-secondary);
          font-size: 14px;
          margin-bottom: 24px;
        }
        .login-form {
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .input-group label {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
        }
        .input-icon-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .input-icon {
          position: absolute;
          left: 14px;
          width: 18px;
          height: 18px;
          color: var(--text-muted);
          pointer-events: none;
        }
        .input-icon-wrapper input {
          padding-left: 44px;
        }
        .w-full {
          width: 100%;
        }
        .submit-btn {
          margin-top: 10px;
          padding: 14px;
        }
        .redirect-text {
          font-size: 14px;
          color: var(--text-secondary);
          margin-top: 24px;
        }
        .redirect-link {
          color: var(--primary);
          font-weight: 600;
        }
        .redirect-link:hover {
          color: #c084fc;
          text-decoration: underline;
        }
        .shrink-0 {
          flex-shrink: 0;
        }
      `}</style>
    </div>
  );
}

export default Login;
