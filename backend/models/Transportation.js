const mongoose = require('mongoose');

const transportationSchema = new mongoose.Schema({
  vehicleType: { type: String, required: true },
  pricePerHour: { type: Number, required: true },
  capacity: { type: Number },
  description: { type: String },
  photos: [String],
});

const Transportation = mongoose.model('Transportation', transportationSchema);
module.exports = Transportation;
