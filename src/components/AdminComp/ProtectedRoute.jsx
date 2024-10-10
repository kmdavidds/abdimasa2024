import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const token = sessionStorage.getItem('token');
    const TIMEOUT_DURATION = 30 * 60 * 1000;

    const [isSessionExpired, setIsSessionExpired] = useState(false);

    useEffect(() => {
        if (!token) return;

        const timeout = setTimeout(() => {
            sessionStorage.removeItem('token');
            setIsSessionExpired(true);
        }, TIMEOUT_DURATION);

        const resetTimeout = () => {
            clearTimeout(timeout);
            setIsSessionExpired(false);
        };

        window.addEventListener('mousemove', resetTimeout);
        window.addEventListener('keydown', resetTimeout);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener('mousemove', resetTimeout);
            window.removeEventListener('keydown', resetTimeout);
        };
    }, [token]);

    if (!token || isSessionExpired) {
        return <Navigate to="/admin/login" />;
    }

    return children;
};

export default ProtectedRoute;
