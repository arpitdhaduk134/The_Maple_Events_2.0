const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');

// Login Functionality
exports.loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the admin by username
    const admin = await Admin.findOne({ username });
    if (!admin) return res.status(404).json({ message: 'Admin not found' });

    // Check password
    const isMatch = await admin.comparePassword(password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    // Generate JWT Token
    const token = jwt.sign(
      { id: admin._id, role: admin.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' } // Token valid for 1 hour
    );

    res.status(200).json({ message: 'Login successful', token, role: admin.role });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Register Admin (for setup purposes, superadmin only)
exports.registerAdmin = async (req, res) => {
  const { username, password, role } = req.body;

  try {
    const newAdmin = new Admin({ username, password, role });
    await newAdmin.save();
    res.status(201).json({ message: 'Admin registered successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering admin', error });
  }
};
