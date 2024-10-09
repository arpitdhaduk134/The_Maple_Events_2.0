const mongoose = require('mongoose');

const entertainmentSchema = new mongoose.Schema({
  name: String,
  type: String,
  price: Number,
  duration: Number,
  description: String,
  tags: [String],
  photos: [String]
});

module.exports = mongoose.model('Entertainment', entertainmentSchema);
