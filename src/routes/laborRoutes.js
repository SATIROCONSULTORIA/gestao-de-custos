const express = require('express');
const router = express.Router();
const laborController = require('../controllers/laborController');

// Rotas para gestão de mão de obra
router.post('/', laborController.addLabor);
router.get('/:plantation_id', laborController.getLaborByPlantation);

module.exports = router;