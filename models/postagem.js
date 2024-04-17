const { DataTypes } = require('sequelize');
const sequelize = require('../database.js');

const Postagem = sequelize.define('postagens', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    conteudo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    autorId: {
        secundaryKey: true,
        type: DataTypes.INTEGER
    }
    
}, {
    createdAt: false,
    updatedAt: false
});

module.exports = Postagem;