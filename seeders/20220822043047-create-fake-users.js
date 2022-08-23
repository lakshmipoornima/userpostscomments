'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     await queryInterface.bulkInsert('users', [
      {
       name: 'John Doe',
       email:"john@gmail.com",
       role:"admin",
       uuid:"53a60874-ed08-4749-a447-1f57fa3be1bc",
       createdAt:"2022-08-19T11:35:11.769Z",
       updatedAt:"2022-08-19T11:35:11.769Z"
       
      },
      {
        name: 'Jane Doe',
        email:"jane@gmail.com",
        role:"admin",
        uuid:"53a60874-ed08-4749-a447-1f57fa3be1de",
        createdAt:"2022-08-19T11:35:11.769Z",
        updatedAt:"2022-08-19T11:35:11.769Z"
        
       }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('users', null, {});
  }
};
