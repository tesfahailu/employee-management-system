'use strict';

const departmentTypeValues = [
  'marketing',
  'operations',
  'finance',
  'sales',
  'human resources',
  'product',
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('department', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      title: {
        type: Sequelize.ENUM,
        values: departmentTypeValues,
        allowNull: false,
        unique: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
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
    return queryInterface.dropTable('department');
  },
  departmentTypeValues: departmentTypeValues,
};
