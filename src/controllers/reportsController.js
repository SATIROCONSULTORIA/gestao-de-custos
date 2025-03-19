const Supplies = require('../models/Supplies');
const Labor = require('../models/Labor');
const Reports = require('../models/Reports');

// Gerar relatório de custos
exports.generateReport = async (req, res) => {
    const { plantation_id } = req.params;

    try {
        const supplies = await Supplies.find({ plantation_id });
        const labor = await Labor.find({ plantation_id });

        const totalSupplyCost = supplies.reduce((acc, item) => acc + item.quantity * item.unit_cost, 0);
        const totalLaborCost = labor.reduce((acc, item) => acc + item.hourly_rate * item.hours_worked, 0);

        const totalCost = totalSupplyCost + totalLaborCost;

        const report = await Reports.create({
            plantation_id,
            total_cost: totalCost
        });

        res.status(200).json(report);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao gerar relatório de custos' });
    }
};