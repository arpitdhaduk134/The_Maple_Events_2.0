const express = require('express');
const { getCateringByBudget } = require('../controllers/cateringController');
const router = express.Router();

router.get('/', getCateringByBudget);

module.exports = router;
