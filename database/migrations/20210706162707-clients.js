'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('clients', { 
       id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
        },
        clientId: {
          type: Sequelize.CITEXT,
          allowNull: true,
          unique: true,
          validate:{
            notEmpty: true
          }
        },
        clientSecret: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notEmpty: true
          }
        }
       });
     
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('clients');
     
  }
};
