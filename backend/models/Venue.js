const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
  name: String,
  location: String,
  capacity: Number,
  price: Number,
  amenities: [String],
  tags: [String],
  photos: [String]
});

module.exports = mongoose.model('Venue', venueSchema);
