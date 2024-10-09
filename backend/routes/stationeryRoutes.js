const express = require('express');
const { getStationeryByBudget } = require('../controllers/stationeryController');
const router = express.Router();

router.get('/', getStationeryByBudget);

module.exports = router;
