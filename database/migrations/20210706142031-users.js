'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.createTable('users', { 
        id:{
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false
        },
        name: {
          type: Sequelize.CITEXT,
          allowNull: false,
        },
        email: {
          type: Sequelize.CITEXT,
          allowNull: false,
        },
        password:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        blacklist: {
          type: Sequelize.STRING,
          allowNull: false
        },
        firstAccess: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notEmpty: true
          },
          defaultValue: true
        },
        active: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
          defaultValue: true
        },
        partial: {
          type: Sequelize.BOOLEAN,
          allowNull: false
        },
        countries: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        disabledCountries: {
          type: Sequelize.STRING,
        },
        web: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          validade: { 
            notEmpty: true,
          },
          defaultValue: false
        },
        clientId:{ 
          type: Sequelize.INTEGER,
          defaultValue: 1
        },
        segments: {
          type: Sequelize.STRING,
          defaultValue: ''
        },
        passwordExpirationDate: {
          type: Sequelize.DATE,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
          defaultValue: Sequelize.NOW
        },
        tries: {
          type: Sequelize.INTEGER,
          allowNull: false,
          validate: {
            notEmpty: true,
            min: 0,
            max: 5,
            isInt:true
          },
          defaultValue: 0
        }
      });
     
  },

  down: async (queryInterface, Sequelize) => {
          await queryInterface.dropTable('users');
    
  }
};
