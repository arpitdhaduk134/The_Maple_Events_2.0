const express = require('express');
const multer = require('multer');
const path = require('path');
const {
  createPortfolio,
  getAllPortfolios,
} = require('../controllers/portfolioController');

const router = express.Router();

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/portfolio');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

// Routes
router.post(
  '/',
  upload.fields([
    { name: 'titleImage', maxCount: 1 },
    { name: 'images', maxCount: 10 },
  ]),
  createPortfolio
);

router.get('/', getAllPortfolios);

module.exports = router;
