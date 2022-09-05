const Sequelize = require('sequelize');
const configDB = require('../config/database');

const Categorias = require('../models/Categorias')

const connection = new Sequelize(configDB)

Categorias.init(connection)

module.exports = connection