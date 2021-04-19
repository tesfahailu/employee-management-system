'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('leave', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
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
      type: {
        type: Sequelize.ENUM,
        values: ['vacation', 'sick', 'holiday', 'personal'],
        allowNull: false,
        unique: false,
      },
      to: {
        type: Sequelize.DATE,
        allowNull: false,
        unique: false,
      },
      from: {
        type: Sequelize.DATE,
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
    return queryInterface.dropTable('leave');
  },
};
