const express = require('express');
const { getTransportationByBudget } = require('../controllers/transportationController');
const router = express.Router();

// GET: Retrieve transportation options within a specific budget per hour
router.get('/', getTransportationByBudget);

// Additional CRUD routes can go here

module.exports = router;
