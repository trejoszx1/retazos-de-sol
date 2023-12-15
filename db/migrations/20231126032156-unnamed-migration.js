'use strict';
const {COLLECTION_TABLE,CollectionScheme}= require('./../models/collection.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
  await queryInterface.addColumn(COLLECTION_TABLE,'garments_id',CollectionScheme.garmentsId)
  },

  async down (queryInterface) {
   await queryInterface.removeColumn(COLLECTION_TABLE,'garments_id' )
  }
};
