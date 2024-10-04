import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; 
import PrivateRoute from './components/PrivateRoute'; 
import Login from './pages/Login';
import Register from './pages/Register';
import BusinessRegister from './pages/BusinessRegister';  // New import for business registration
import AppointmentList from './pages/AppointmentList';
import BusinessDashboard from './pages/BusinessDashboard'; // New import for business dashboard
import BusinessLogin from './pages/BusinessLogin';

function App() {
    return (
        <Router>
            <Routes>
                {/* Redirect root "/" path to login */}
                <Route path="/" element={<Navigate to="/login" />} />
                
                {/* Login and Register routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Business registration route */}
                <Route path="/register-business" element={<BusinessRegister />} />
                <Route path="/business-login" element={<BusinessLogin />} />

                {/* Private route for customer appointments */}
                <Route path="/appointments" element={<PrivateRoute role="customer" />}>
                    <Route path="" element={<AppointmentList />} />
                </Route>

                {/* Private route for business dashboard */}
                <Route path="/business-dashboard" element={<PrivateRoute role="business" />}>
                    <Route path="" element={<BusinessDashboard />} />
                </Route>

                {/* Fallback route for undefined paths */}
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}

export default App;
