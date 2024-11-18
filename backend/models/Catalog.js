const mongoose = require('mongoose');

// Unified Catalog Schema
const catalogSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true }, // E.g., 'venue', 'catering', 'decorations', etc.
  description: { type: String, required: true },
  price: { type: Number }, // General price (used for venues, decorations, etc.)
  pricePerGuest: { type: Number }, // Specific for catering
  pricePerHour: { type: Number }, // Specific for transportation
  pricePerPiece: { type: Number }, // Specific for stationery
  capacity: { type: Number }, // For venues or transport
  includedItems: [String], // For decorations or stationery (optional)
  amenities: [String], // For venues or transport (optional)
  location: { type: String }, // For venues or transport (optional)
  tags: [String], // Event categories like 'Wedding', 'Corporate Event', etc.
  photos: [String], // Paths to images stored locally
  createdAt: { type: Date, default: Date.now }, // Auto-timestamp for creation
});

module.exports = mongoose.model('Catalog', catalogSchema);
