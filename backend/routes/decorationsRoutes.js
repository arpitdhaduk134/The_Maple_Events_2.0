const express = require('express');
const { getDecorationsByBudget } = require('../controllers/decorationsController');
const router = express.Router();

// GET: Retrieve decoration options within a specific budget
router.get('/', getDecorationsByBudget);

// Additional CRUD routes can go here

module.exports = router;
