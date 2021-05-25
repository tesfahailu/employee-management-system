'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const newDate = new Date();
    await queryInterface.bulkInsert('department', [
      {
        title: 'marketing',
        description:
          'assists a business with creating, implementing, and sustaining marketing strategie.',
        created_at: newDate,
        updated_at: newDate,
      },
      {
        title: 'operations',
        description:
          'responsible for the effective and successful management of labor, productivity, quality control and safety measures.',
        created_at: newDate,
        updated_at: newDate,
      },
      {
        title: 'finance',
        description:
          'manage accounting, budgeting/planning, and liquidity, including cash management.',
        created_at: newDate,
        updated_at: newDate,
      },
      {
        title: 'sales',
        description:
          "responsible for selling company's products by identifying leads, educating prospects on products through calls, trainings, and presentations, and providing existing customers with exceptional support.",
        created_at: newDate,
        updated_at: newDate,
      },
      {
        title: 'human resources',
        description:
          'division of company charged with finding, screening, recruiting, and training job applicants, as well as administering employee-benefit programs.',
        created_at: newDate,
        updated_at: newDate,
      },
      {
        title: 'product',
        description:
          'responsible for implementing strategy, building the roadmap, and defining product features.',
        created_at: newDate,
        updated_at: newDate,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('department', null, {});
  },
};
