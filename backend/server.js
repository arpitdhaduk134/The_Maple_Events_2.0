const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const catalogRoutes = require('./routes/catalogRoutes'); // Catalog Routes
const budgetRoutes = require('./routes/budgetRoutes'); // Budget Routes
const eventRoutes = require('./routes/eventRoutes'); // Event Routes

require('dotenv').config();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve static files from the uploads directory
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON requests

// Routes
app.use('/api/catalog', catalogRoutes); // Catalog CRUD operations
app.use('/api/budget', budgetRoutes); // Budget Calculator and related operations
app.use('/api/events', eventRoutes); // Event-related operations
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Server Initialization
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
