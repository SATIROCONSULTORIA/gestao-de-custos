const express = require('express');
const router = express.Router();
const suppliesController = require('../controllers/suppliesController');

// Rotas para gestão de insumos
router.post('/', suppliesController.addSupplies);
router.get('/:plantation_id', suppliesController.getSuppliesByPlantation);

module.exports = router;