const { Model, DataTypes } = require('sequelize')

class Categorias extends Model {
  static init(sequelize) {
    super.init({
      codigo: DataTypes.CHAR,
      titulo: DataTypes.CHAR,
      status: DataTypes.INTEGER,

    }, {
      sequelize
    })
  }
}

module.exports = Categorias