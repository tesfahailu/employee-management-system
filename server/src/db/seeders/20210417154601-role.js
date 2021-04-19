'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const newDate = new Date();
    await queryInterface.bulkInsert('role', [
      {
        name: 'admin',
        description: 'can view, edit, and delete all resources',
        created_at: newDate,
        updated_at: newDate,
      },
      {
        name: 'basic',
        description: 'can view, edit, and delete own resources',
        created_at: newDate,
        updated_at: newDate,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('role', null, {});
  },
};
