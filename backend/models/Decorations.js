const mongoose = require('mongoose');

const decorationsSchema = new mongoose.Schema({
  packageName: { type: String, required: true },
  price: { type: Number, required: true },
  includedItems: [String],
  description: { type: String },
  photos: [String],
});

const Decorations = mongoose.model('Decorations', decorationsSchema);
module.exports = Decorations;
