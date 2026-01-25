'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Airplanes', [{
        modelNumber: 'Boeng 737',
        capacity:350,
        createdAt:new Date(),
        updatedAt:new Date()
      }, 
        {
          modelNumber: 'AirBus 408',
          capacity:400 ,
          createdAt:new Date(),
        updatedAt:new Date()
        },
        {
          modelNumber: 'Maglev 600',
          capacity:750,
          createdAt:new Date(),
        updatedAt:new Date()
        },
        {
          modelNumber: 'Xi-689',
          capacity:170,
          createdAt:new Date(),
        updatedAt:new Date()
        }
      ]
      );
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
