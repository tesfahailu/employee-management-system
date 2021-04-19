'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const newDate = new Date();
    await queryInterface.bulkInsert('resource', [
      {
        name: 'experience',
        description: '',
        created_at: newDate,
        updated_at: newDate,
      },
      {
        name: 'leave',
        description: '',
        created_at: newDate,
        updated_at: newDate,
      },
      {
        name: 'employee address',
        description: '',
        created_at: newDate,
        updated_at: newDate,
      },
      {
        name: 'office',
        description: '',
        created_at: newDate,
        updated_at: newDate,
      },
      {
        name: 'office address',
        description: '',
        created_at: newDate,
        updated_at: newDate,
      },
      {
        name: 'employee',
        description: '',
        created_at: newDate,
        updated_at: newDate,
      },
      {
        name: 'login',
        description: '',
        created_at: newDate,
        updated_at: newDate,
      },
      {
        name: 'role',
        description: '',
        created_at: newDate,
        updated_at: newDate,
      },
      {
        name: 'permission',
        description: '',
        created_at: newDate,
        updated_at: newDate,
      },
      {
        name: 'resource',
        description: '',
        created_at: newDate,
        updated_at: newDate,
      },
      {
        name: 'employee project',
        description: '',
        created_at: newDate,
        updated_at: newDate,
      },
      {
        name: 'session',
        description: '',
        created_at: newDate,
        updated_at: newDate,
      },
      {
        name: 'project',
        description: '',
        created_at: newDate,
        updated_at: newDate,
      },
      {
        name: 'salary',
        description: '',
        created_at: newDate,
        updated_at: newDate,
      },
      {
        name: 'department',
        description: '',
        created_at: newDate,
        updated_at: newDate,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('resource', null, {});
  },
};
