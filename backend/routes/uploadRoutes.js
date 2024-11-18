const express = require('express');
const multer = require('multer');
const router = express.Router();
const Catalog = require('../models/Catalog');

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads'); // Directory to save files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Unique file name
  },
});

const upload = multer({ storage });

// Upload endpoint
router.post('/upload', upload.single('photo'), async (req, res) => {
  try {
    const { type, name, price, description, tags } = req.body;

    // Create a new catalog entry with the photo
    const catalogEntry = new Catalog({
      type,
      name,
      price,
      description,
      tags: tags ? tags.split(',') : [],
      photos: [`/uploads/${req.file.filename}`], // Store the relative path of the photo
    });

    await catalogEntry.save();

    res.status(201).json({
      message: 'Photo uploaded and catalog entry created successfully',
      data: catalogEntry,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading photo', error });
  }
});

module.exports = router;
