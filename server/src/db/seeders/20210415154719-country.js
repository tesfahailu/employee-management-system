'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const newDate = new Date();
    await queryInterface.bulkInsert('country', [
      { name: 'US', created_at: newDate, updated_at: newDate },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('country', null, {});
  },
};
