import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom'; // Import 'Navigate' and 'Outlet'

const PrivateRoute = () => {
    const isAuthenticated = !!localStorage.getItem('token'); // Check if token exists

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
