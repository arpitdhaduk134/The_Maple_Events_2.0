const mongoose = require('mongoose');

const stationerySchema = new mongoose.Schema({
  packageName: String,
  pricePerPiece: Number,
  itemsIncluded: [String],
  description: String,
  tags: [String],
  photos: [String]
});

module.exports = mongoose.model('Stationery', stationerySchema);
