const express = require('express');
const { getEntertainmentByBudget } = require('../controllers/entertainmentController');
const router = express.Router();

// GET: Retrieve entertainment options within a specific budget
router.get('/', getEntertainmentByBudget);

// Additional CRUD routes can go here

module.exports = router;
