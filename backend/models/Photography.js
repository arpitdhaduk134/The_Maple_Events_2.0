const mongoose = require('mongoose');

const photographySchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  coverageTime: { type: Number, required: true },
  packageType: { type: String },
  description: { type: String },
  photos: [String],
});

const Photography = mongoose.model('Photography', photographySchema);
module.exports = Photography;
