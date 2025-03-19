const Supplies = require('../models/Supplies');

// Adicionar insumos para uma plantação
exports.addSupplies = async (req, res) => {
    const { plantation_id, item, quantity, unit_cost } = req.body;

    try {
        const supplies = await Supplies.create({ plantation_id, item, quantity, unit_cost });
        res.status(201).json(supplies);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar insumos' });
    }
};

// Listar insumos por plantação
exports.getSuppliesByPlantation = async (req, res) => {
    const { plantation_id } = req.params;

    try {
        const supplies = await Supplies.find({ plantation_id });
        res.status(200).json(supplies);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar insumos' });
    }
};