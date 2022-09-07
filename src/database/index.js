const Sequelize = require('sequelize');
const configDB = require('../config/database');

const Categorias = require('../models/Categorias')
const Produtos = require('../models/Produtos')

const connection = new Sequelize(configDB)

Categorias.init(connection)
Produtos.init(connection)

module.exports = connection