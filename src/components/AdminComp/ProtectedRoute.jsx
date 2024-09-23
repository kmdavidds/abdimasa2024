import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');

    if (!isLoggedIn) {
        return <Navigate to="/admin/login" />;
    }

    return children;
};

export default ProtectedRoute;
