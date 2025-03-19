const express = require('express');
const app = express();

// Defina a porta corretamente
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Aplicação rodando com sucesso!');
});

// Certifique-se de que esta linha está presente e correta
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});