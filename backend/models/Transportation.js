const mongoose = require('mongoose');

const transportationSchema = new mongoose.Schema({
  vehicleType: String,
  pricePerHour: Number,
  capacity: Number,
  description: String,
  tags: [String],
  photos: [String]
});

module.exports = mongoose.model('Transportation', transportationSchema);
