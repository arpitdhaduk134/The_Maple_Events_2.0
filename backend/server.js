// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

// Import Routes
const budgetRoutes = require('./routes/budgetRoutes'); // Import your route files
const venueRoutes = require('./routes/venueRoutes'); // Add other route files as needed

// Initialize Express App
const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};
connectDB();

// Use Routes
app.use('/api/budget', budgetRoutes);
app.use('/api/venues', venueRoutes);
// Add more routes as needed for other services...

// Default Route (for testing purposes)
app.get('/', (req, res) => {
  res.send('Welcome to the Maple Events Backend API');
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
