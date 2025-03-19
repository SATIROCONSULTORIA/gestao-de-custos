const Labor = require('../models/Labor');

// Registrar mão de obra
exports.addLabor = async (req, res) => {
    const { plantation_id, worker_name, hours_worked, hourly_rate } = req.body;

    try {
        const labor = await Labor.create({ plantation_id, worker_name, hours_worked, hourly_rate });
        res.status(201).json(labor);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao registrar mão de obra' });
    }
};

// Listar mão de obra por plantação
exports.getLaborByPlantation = async (req, res) => {
    const { plantation_id } = req.params;

    try {
        const labor = await Labor.find({ plantation_id });
        res.status(200).json(labor);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar mão de obra' });
    }
};