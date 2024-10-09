const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors
const budgetRoutes = require('./routes/budgetRoutes');
require('dotenv').config();

const app = express(); // Initialize app first

const PORT = process.env.PORT || 5000;

// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/api/budget', budgetRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  // No need to include useNewUrlParser or useUnifiedTopology as they are deprecated.
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
