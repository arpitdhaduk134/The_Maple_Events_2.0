const express = require('express');
const { getEntertainmentByBudget } = require('../controllers/entertainmentController');
const router = express.Router();

router.get('/', getEntertainmentByBudget);

module.exports = router;
