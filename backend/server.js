const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const catalogRoutes = require('./routes/catalogRoutes');
const budgetRoutes = require('./routes/budgetRoutes');
const eventRoutes = require('./routes/eventRoutes');
const portfolioRoutes = require('./routes/portfolioRoutes');
const adminRoutes = require('./routes/adminRoutes');
const authRoutes = require('./routes/authRoutes'); // Import auth routes
require('dotenv').config();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Log middleware execution
console.log('✅ Middleware loaded');

// Routes
app.use('/api/catalog', catalogRoutes);
app.use('/api/budget', budgetRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/admin', adminRoutes); // Add admin routes
app.use('/api/auth', authRoutes); // Add auth routes

// Log route loading
console.log('✅ Routes loaded');

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Error handling for unhandled routes
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// General error handler
app.use((err, req, res, next) => {
  console.error('❌ Server error:', err);
  res.status(500).json({ message: 'Internal server error' });
});

// Server Initialization
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
