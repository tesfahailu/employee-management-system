'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('employee', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      employee_address_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'employee_address',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
        unique: false,
        allowNull: false,
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      mobile: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      supervisor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'employee',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
        unique: false,
        allowNull: true,
      },
      office_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'office',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
        unique: false,
        allowNull: false,
      },
      type: {
        type: Sequelize.ENUM,
        values: ['permenant', 'contract', 'fulltime', 'parttime'],
        allowNull: false,
        unique: false,
      },
      department_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'department',
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
    return queryInterface.dropTable('employee');
  },
};
