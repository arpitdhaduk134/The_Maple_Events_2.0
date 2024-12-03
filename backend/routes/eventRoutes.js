// routes/eventRoutes.js
const express = require('express');
const multer = require('multer');
const Event = require('../models/Event');
const router = express.Router();

// Multer configuration for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/events');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

// Create a new event
router.post('/', upload.single('titleImage'), async (req, res) => {
  try {
    const { title, date, description } = req.body;
    const titleImage = `/uploads/events/${req.file.filename}`;

    const newEvent = new Event({ title, date, description, titleImage });
    await newEvent.save();
    res.status(201).json({ message: 'Event created successfully!', event: newEvent });
  } catch (error) {
    res.status(500).json({ message: 'Error creating event', error });
  }
});

// Get all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(
      events.map((event) => ({
        ...event._doc,
        titleImage: `http://localhost:5000${event.titleImage}`,
      }))
    );
  } catch (error) {
    res.status(500).json({ message: 'Error fetching events', error });
  }
});

// Update an event
router.put('/:id', upload.single('titleImage'), async (req, res) => {
  try {
    const { title, date, description } = req.body;
    const updateData = { title, date, description };

    if (req.file) {
      updateData.titleImage = `/uploads/events/${req.file.filename}`;
    }

    const updatedEvent = await Event.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!updatedEvent) return res.status(404).json({ message: 'Event not found' });

    res.status(200).json({
      message: 'Event updated successfully!',
      event: {
        ...updatedEvent._doc,
        titleImage: `http://localhost:5000${updatedEvent.titleImage}`,
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Error updating event', error });
  }
});

// Delete an event
router.delete('/:id', async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    const fs = require('fs');
    const path = `.${event.titleImage}`;
    if (fs.existsSync(path)) fs.unlinkSync(path); // Remove image file

    res.status(200).json({ message: 'Event deleted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting event', error });
  }
});

module.exports = router;
