// routes/eventRoutes.js
const express = require('express');
const Event = require('../models/Event'); // Import Event model
const upload = require('../middlewares/upload'); // Multer middleware for image upload
const router = express.Router();

// Create a new event
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const { title, date, description } = req.body;
        const imageUrl = `/uploads/${req.file.filename}`; // Path to uploaded image

        const newEvent = new Event({ title, date, description, imageUrl });
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
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching events', error });
    }
});

// Get a single event
router.get('/:id', async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) return res.status(404).json({ message: 'Event not found' });
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching event', error });
    }
});

// Update an event
router.put('/:id', upload.single('image'), async (req, res) => {
    try {
        const { title, date, description } = req.body;
        const updateData = { title, date, description };

        if (req.file) {
            updateData.imageUrl = `/uploads/${req.file.filename}`; // Update image if provided
        }

        const updatedEvent = await Event.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!updatedEvent) return res.status(404).json({ message: 'Event not found' });

        res.status(200).json({ message: 'Event updated successfully!', event: updatedEvent });
    } catch (error) {
        res.status(500).json({ message: 'Error updating event', error });
    }
});

// Delete an event
router.delete('/:id', async (req, res) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.id);
        if (!event) return res.status(404).json({ message: 'Event not found' });

        // Optional: Delete the image file
        const fs = require('fs');
        const path = `.${event.imageUrl}`;
        if (fs.existsSync(path)) fs.unlinkSync(path);

        res.status(200).json({ message: 'Event deleted successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting event', error });
    }
});

module.exports = router;
