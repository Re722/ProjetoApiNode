const { Model, DataTypes } = require('sequelize')

class Categorias extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING
    }, {
      sequelize
    })
  }
}

module.exports = Categorias