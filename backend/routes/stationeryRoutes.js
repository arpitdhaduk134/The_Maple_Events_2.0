const express = require('express');
const { getStationeryByBudget } = require('../controllers/stationeryController');
const router = express.Router();

// GET: Retrieve stationery options within a specific budget per piece
router.get('/', getStationeryByBudget);

// Additional CRUD routes can go here

module.exports = router;
