const express = require('express');
const { getDecorationsByBudget } = require('../controllers/decorationsController');
const router = express.Router();

router.get('/', getDecorationsByBudget);

module.exports = router;
