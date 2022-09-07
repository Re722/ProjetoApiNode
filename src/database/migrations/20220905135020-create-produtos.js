'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('produtos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      idCategoria: {
        type: Sequelize.INTEGER,
      // foreignKey: 'idcategorias',
      },
      codigo: {
        type: Sequelize.VARCHAR,
        allowNull: false,
      },
      nome: {
        type: Sequelize.VARCHAR,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.VARCHAR,
        allowNull: false,
      },
      valor: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      status: {
        type: Sequelize.INTEGER,

      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('produtos');
  }
};
