const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Tabela do meu banco de dados de Produtos e seus atributos
const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    photo: {
        type: DataTypes.BLOB('long'), // Armazena dados binários no banco
        allowNull: true,
    },
});

module.exports = Product;
