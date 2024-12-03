// models/Event.js
const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true },
    titleImage: { type: String, required: true }, // Path to the uploaded title image
  },
  { timestamps: true }
);

module.exports = mongoose.model('Event', EventSchema);
