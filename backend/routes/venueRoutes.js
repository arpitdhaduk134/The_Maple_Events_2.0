const express = require('express');
const { getVenuesByBudget } = require('../controllers/venueController');
const router = express.Router();

router.get('/', getVenuesByBudget);

module.exports = router;
