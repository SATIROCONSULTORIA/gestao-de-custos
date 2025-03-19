const express = require('express');
const router = express.Router();
const plantationController = require('../controllers/plantationController');

// Rotas para gestão de áreas de plantio
router.post('/', plantationController.createPlantation);
router.get('/', plantationController.getAllPlantations);

module.exports = router;