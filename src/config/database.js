const mongoose = require('mongoose');
require('dotenv').config();

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ Banco de dados conectado com sucesso!");
    } catch (error) {
        console.error("❌ Erro ao conectar ao banco de dados:", error);
        process.exit(1); // Finaliza o processo em caso de erro grave
    }
}

module.exports = connectDB;