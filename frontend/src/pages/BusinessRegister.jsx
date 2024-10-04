import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function BusinessRegister() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [services, setServices] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/business/register-business', {
                name,
                email,
                password,
                phone,
                address,
                services: services.split(',').map(service => service.trim()), // Converting services to an array
            });

            // Optionally save token or handle success response
            localStorage.setItem('token', response.data.token);
            navigate('/business-dashboard'); // Redirect to business dashboard after registration
        } catch (err) {
            setError('Error registering business');
        }
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Business Registration</Typography>
            {error && <Typography color="error">{error}</Typography>}
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    fullWidth
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Phone"
                    fullWidth
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Address"
                    fullWidth
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Services Offered (comma separated)"
                    fullWidth
                    required
                    value={services}
                    onChange={(e) => setServices(e.target.value)}
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Register Business
                </Button>
            </form>
        </Container>
    );
}

export default BusinessRegister;
