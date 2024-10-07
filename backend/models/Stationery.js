const mongoose = require('mongoose');

const stationerySchema = new mongoose.Schema({
  packageName: { type: String, required: true },
  pricePerPiece: { type: Number, required: true },
  itemsIncluded: [String],
  description: { type: String },
  photos: [String],
});

const Stationery = mongoose.model('Stationery', stationerySchema);
module.exports = Stationery;
