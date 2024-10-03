const express = require('express');
const Appointment = require('../models/Appointment');
const router = express.Router();

// Create a new appointment
router.post('/', async (req, res) => {
    const { customer, business, service, date } = req.body;

    try {
        const appointment = new Appointment({ customer, business, service, date });
        await appointment.save();
        res.status(201).json(appointment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get appointments for a business
router.get('/business/:businessId', async (req, res) => {
    const { businessId } = req.params;

    try {
        const appointments = await Appointment.find({ business: businessId }).populate('customer', 'name email');
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;