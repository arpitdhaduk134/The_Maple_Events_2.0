// models/Event.js
const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true }, // Path to the uploaded image
});

module.exports = mongoose.model('Event', EventSchema);
