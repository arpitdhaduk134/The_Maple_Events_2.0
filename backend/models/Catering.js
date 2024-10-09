const mongoose = require('mongoose');

const cateringSchema = new mongoose.Schema({
  name: String,
  pricePerGuest: Number,
  menuOptions: [String],
  description: String,
  tags: [String],
  photos: [String]
});

module.exports = mongoose.model('Catering', cateringSchema);
