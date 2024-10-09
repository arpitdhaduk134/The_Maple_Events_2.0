const mongoose = require('mongoose');

const photographySchema = new mongoose.Schema({
  name: String,
  price: Number,
  coverageTime: Number,
  packageType: String,
  description: String,
  tags: [String],
  photos: [String]
});

module.exports = mongoose.model('Photography', photographySchema);
