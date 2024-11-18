const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

router.get('/events', async (req, res) => {
  try {
    const { category, date, location } = req.query;

    const query = {};
    if (category) query.category = category;
    if (date) query.date = new Date(date);
    if (location) query.location = { $regex: location, $options: 'i' };

    const events = await Event.find(query);
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
