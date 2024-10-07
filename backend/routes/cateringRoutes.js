const express = require('express');
const { getCateringByBudget } = require('../controllers/cateringController');
const router = express.Router();

// GET: Retrieve catering options within a specific budget per guest
router.get('/', getCateringByBudget);

// Additional CRUD routes can go here

module.exports = router;
