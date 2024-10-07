const mongoose = require('mongoose');

const cateringSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pricePerGuest: { type: Number, required: true },
  menuOptions: [String],
  description: { type: String },
  photos: [String],
});

const Catering = mongoose.model('Catering', cateringSchema);
module.exports = Catering;
