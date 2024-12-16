const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const sequelize = require('./config/database');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.use('/products', productRoutes);

const PORT = process.env.PORT || 3000; // Porta do servidor banco de dados

// Metodo para verificar se está tudo Ok com o a conexão com o banco de dados
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Conectado ao banco de dados');
        app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

    } catch (error) {
        console.error('Algo de errado ocorreu na conexão com o banco de dados:', error);
    }
})();
