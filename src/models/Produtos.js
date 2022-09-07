const { Model, DataTypes } = require('sequelize')
const Categorias = require('../models/Categorias')
//const categorias = require('../models/Categorias')

class Produtos extends Model {
  static init(sequelize) {
    super.init({
      idCategoria: DataTypes.INTEGER,
      codigo: DataTypes.CHAR,
      nome: DataTypes.CHAR,
      descricao: DataTypes.TEXT,
      valor: DataTypes.DECIMAL,
      status: DataTypes.INTEGER,


    }, {
      sequelize
    })
    //Produtos.sync();
    Produtos.belongsTo(Categorias, { foreignKey: 'idCategoria', allowNull: false });
  }
}

module.exports = Produtos