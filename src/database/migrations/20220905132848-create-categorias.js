'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('categorias', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,

      },
      codigo: {
        type: Sequelize.VARCHAR,
        allowNull: false,
      },
      titulo: {
        type: Sequelize.VARCHAR,
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
    return queryInterface.dropTable('categorias');
  }
};
