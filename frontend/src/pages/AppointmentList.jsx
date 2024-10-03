import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

function AppointmentList() {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5000/api/appointments', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                setAppointments(response.data);
            } catch (err) {
                console.error('Error fetching appointments', err);
            }
        };

        fetchAppointments();
    }, []);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Your Appointments</Typography>
            <List>
                {appointments.map((appointment) => (
                    <ListItem key={appointment._id}>
                        <ListItemText
                            primary={`Service: ${appointment.service}`}
                            secondary={`Date: ${new Date(appointment.date).toLocaleString()}`}
                        />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}

export default AppointmentList;
