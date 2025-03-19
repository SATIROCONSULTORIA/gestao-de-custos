const express = require('express');
const router = express.Router();
const reportsController = require('../controllers/reportsController');

// Rota para gerar relatório de custos
router.get('/:plantation_id', reportsController.generateReport);

module.exports = router;