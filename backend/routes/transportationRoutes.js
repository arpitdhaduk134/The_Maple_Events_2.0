const express = require('express');
const { getTransportationByBudget } = require('../controllers/transportationController');
const router = express.Router();

router.get('/', getTransportationByBudget);

module.exports = router;
