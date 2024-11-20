const express = require('express');
const router = express.Router();
const { calculateBudget } = require('../controllers/budgetController');

// Budget Calculator Endpoint
router.post('/calculate', calculateBudget);

module.exports = router;
