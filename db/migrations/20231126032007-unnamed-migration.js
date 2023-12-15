'use strict';
const {GarmentsScheme, GARMENTS_TABLE} = require('../models/garments.model')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(GARMENTS_TABLE, GarmentsScheme);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(GARMENTS_TABLE);
  }
};
