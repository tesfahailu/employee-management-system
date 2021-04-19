'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('permission', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      role_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'role',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
        unique: false,
        allowNull: false,
      },
      resource_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'resource',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
        unique: false,
        allowNull: false,
      },
      can_view_self: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        unique: false,
        defaultValue: true,
      },
      can_view_all: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        unique: false,
        defaultValue: false,
      },
      can_create: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        unique: false,
        defaultValue: false,
      },
      can_edit: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        unique: false,
        defaultValue: false,
      },
      can_delete: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        unique: false,
        defaultValue: false,
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
    return queryInterface.dropTable('permission');
  },
};
