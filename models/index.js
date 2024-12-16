const sequelize = require('../config/database');
const Product = require('./product');

// Sicronizando mue banco de dados com minha(s) tabela(s)
(async () => {
    try {
        await sequelize.sync({ force: false });
        console.log('Banco de dados sicronizado!!!');

    } catch (error) {
        console.error('Erro na sicronização como banco de dados:', error);
    }
})();

module.exports = { Product };
