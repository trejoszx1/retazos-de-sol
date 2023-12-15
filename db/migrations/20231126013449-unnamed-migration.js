'use strict';
const {CollectionScheme,COLLECTION_TABLE} = require('../models/collection.model')

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(COLLECTION_TABLE, CollectionScheme);

 },

 async down (queryInterface) {
    await queryInterface.dropTable(COLLECTION_TABLE);

 }
};
