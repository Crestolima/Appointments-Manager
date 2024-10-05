import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import jwt_decode from 'jwt-decode'; // Make sure to install this: npm install jwt-decode

const PrivateRoute = ({ role }) => {
    const token = localStorage.getItem('token'); // Retrieve token from localStorage

    if (!token) {
        // If no token exists, redirect to login
        return <Navigate to="/login" />;
    }

    try {
        // Decode the token to extract user details
        const decodedToken = jwt_decode(token);

        // Check if the role from the token matches the required role
        if (decodedToken.role !== role) {
            // If the role does not match, redirect to an unauthorized or login page
            return <Navigate to="/unauthorized" />;
        }

        // If authenticated and role matches, render the requested component
        return <Outlet />;
    } catch (error) {
        // In case of error (invalid token, decoding issue, etc.), redirect to login
        console.error('Error decoding token:', error);
        return <Navigate to="/login" />;
    }
};

export default PrivateRoute;
