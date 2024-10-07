const express = require('express');
const { calculateBudget } = require('../controllers/budgetController');
const router = express.Router();

router.post('/calculate', calculateBudget);

module.exports = router;
