import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; 
import PrivateRoute from './components/PrivateRoute'; 
import Login from './pages/Login';
import Register from './pages/Register';
import AppointmentList from './pages/AppointmentList';

function App() {
    return (
        <Router>
            <Routes>
                {/* Redirect root "/" path to login */}
                <Route path="/" element={<Navigate to="/login" />} />
                
                {/* Login and Register routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                {/* Private route for appointments */}
                <Route path="/appointments" element={<PrivateRoute />}>
                    <Route path="" element={<AppointmentList />} />
                </Route>
                
                {/* Fallback route for undefined paths */}
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}

export default App;
