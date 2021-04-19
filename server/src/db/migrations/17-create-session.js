'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('session', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      start_date: {
        type: Sequelize.DATE,
        allowNull: false,
        unique: false,
      },
      end_date: {
        type: Sequelize.DATE,
        allowNull: false,
        unique: false,
      },
      employee_project_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'employee_project',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
        unique: false,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        unique: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        unique: false,
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
        unique: false,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('session');
  },
};
