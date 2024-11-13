import React from 'react';
import { Navigate } from 'react-router-dom';
import { getAccessToken } from '../services/authService';

const ProtectedRoute = ({ component: Component }) => {
    const isAuthenticated = !!getAccessToken();

    return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
