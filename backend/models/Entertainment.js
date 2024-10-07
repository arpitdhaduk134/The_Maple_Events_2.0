const mongoose = require('mongoose');

const entertainmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String },
  price: { type: Number, required: true },
  duration: { type: Number },
  description: { type: String },
  photos: [String],
});

const Entertainment = mongoose.model('Entertainment', entertainmentSchema);
module.exports = Entertainment;
