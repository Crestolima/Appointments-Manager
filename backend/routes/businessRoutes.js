const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // For generating JWT tokens
const Business = require('../models/Business');


const router = express.Router();

// @route POST /api/business/register-business
// @desc Register a new business
router.post('/register-business', async (req, res) => {
  const { name, email, password, address, phone, services } = req.body;

  try {
    // Check if the business already exists
    const existingBusiness = await Business.findOne({ email });
    if (existingBusiness) {
      return res.status(400).json({ message: 'Business already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new business
    const newBusiness = new Business({
      name,
      email,
      password: hashedPassword,
      address,
      phone,
      services,
    });

    // Save the business to the database
    await newBusiness.save();

    res.status(201).json({ message: 'Business registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route POST /api/business/login-business
// @desc Login a business
router.post('/business-login', async (req, res) => {
  const { email, password } = req.body;

  // Check if email and password are provided
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    // Find the business by email
    const business = await Business.findOne({ email });
    if (!business) {
      return res.status(400).json({ message: 'Business not found' });
    }

    // Compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(password, business.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: business._id, role: 'business' }, process.env.JWT_SECRET, {
      expiresIn: '1h', // Token valid for 1 hour
    });

    // Respond with the token
    res.status(200).json({
      message: 'Business logged in successfully',
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
