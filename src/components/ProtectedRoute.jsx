import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ user, children }) {
  if (!user) {
    // Redirect to login page if user is not authenticated
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
