import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Generate from './pages/Generate';
import Wardrobe from './pages/Wardrobe';
import Team from './pages/Team';
import Feedback from './pages/Feedback';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on mount
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setUser(loggedInUser);
    }
    setLoading(false);
  }, []);

  const handleLogin = (username) => {
    localStorage.setItem('loggedInUser', username);
    setUser(username);
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setUser(null);
  };

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#06050c'
      }}>
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        {/* Public Routes */}
        <Route 
          path="/" 
          element={user ? <Navigate to="/dashboard" replace /> : <Landing />} 
        />
        <Route 
          path="/login" 
          element={user ? <Navigate to="/dashboard" replace /> : <Login onLogin={handleLogin} />} 
        />
        <Route 
          path="/register" 
          element={user ? <Navigate to="/dashboard" replace /> : <Register />} 
        />

        {/* Protected Routes */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute user={user}>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/about" 
          element={
            <ProtectedRoute user={user}>
              <About />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/services/generate" 
          element={
            <ProtectedRoute user={user}>
              <Generate />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/services/wardrobe" 
          element={
            <ProtectedRoute user={user}>
              <Wardrobe />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/team" 
          element={
            <ProtectedRoute user={user}>
              <Team />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/feedback" 
          element={
            <ProtectedRoute user={user}>
              <Feedback />
            </ProtectedRoute>
          } 
        />

        {/* Fallback routing */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
