const mongoose = require('mongoose');

const decorationsSchema = new mongoose.Schema({
  packageName: String,
  price: Number,
  includedItems: [String],
  description: String,
  tags: [String],
  photos: [String]
});

module.exports = mongoose.model('Decorations', decorationsSchema);
