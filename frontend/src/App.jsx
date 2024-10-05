import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; 
import PrivateRoute from './components/PrivateRoute'; 
import LandingPage from './pages/LandingPage'; // Import the landing page
import Login from './pages/Login';
import Register from './pages/Register';
import BusinessRegister from './pages/BusinessRegister';
import BusinessLogin from './pages/BusinessLogin';
import AppointmentList from './pages/AppointmentList';
import BusinessDashboard from './pages/BusinessDashboard';
//import AdminLogin from './pages/AdminLogin';  // Import for admin login
//import AdminDashboard from './pages/AdminDashboard';  // Import for admin dashboard

function App() {
    return (
        <Router>
            <Routes>
                {/* Landing page route */}
                <Route path="/" element={<LandingPage />} />

                {/* Login and Register routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Business registration and login routes */}
                <Route path="/register-business" element={<BusinessRegister />} />
                <Route path="/business-login" element={<BusinessLogin />} />

                {/* Admin login route 
                <Route path="/admin-login" element={<AdminLogin />} /> */}

                {/* Private route for customer appointments */}
                <Route path="/appointments" element={<PrivateRoute role="customer" />}>
                    <Route path="" element={<AppointmentList />} />
                </Route>

                {/* Private route for business dashboard */}
                <Route path="/business-dashboard" element={<PrivateRoute role="business" />}>
                    <Route path="" element={<BusinessDashboard />} />
                </Route>

                {/* Private route for admin dashboard 
                <Route path="/admin-dashboard" element={<PrivateRoute role="admin" />}>
                    <Route path="" element={<AdminDashboard />} />
                </Route>*/}

                {/* Fallback route for undefined paths */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;
