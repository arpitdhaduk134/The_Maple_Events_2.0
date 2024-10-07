// routes/venueRoutes.js

const express = require('express');
const { getVenuesByBudget } = require('../controllers/venueController');
const router = express.Router();

// GET route to fetch venues within a budget
router.get('/venues', getVenuesByBudget);

module.exports = router;
