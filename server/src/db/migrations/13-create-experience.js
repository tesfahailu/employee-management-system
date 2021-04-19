'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('experience', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false,
      },
      employee_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'employee',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
        unique: false,
        allowNull: false,
      },
      start: {
        type: Sequelize.DATE,
        allowNull: false,
        unique: false,
      },
      end: {
        type: Sequelize.DATE,
        allowNull: true,
        unique: false,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
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
    return queryInterface.dropTable('experience');
  },
};
