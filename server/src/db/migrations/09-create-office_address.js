'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('office_address', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      office_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'office',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
        unique: true,
        allowNull: false,
      },
      street_address1: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      street_address2: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      state_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'state',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
        unique: false,
        allowNull: false,
      },
      country_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'country',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
        unique: false,
        allowNull: false,
      },
      zip_code: {
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
    return queryInterface.dropTable('office_address');
  },
};
