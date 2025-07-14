const getNotionData = require('./notionControllers/notionQuery');
const createNotionData = require('./notionControllers/notionCreate.js');
const updateInDatabase = require('./notionControllers/notionUpdate')

const { confNot } = require('./../../config/config');

class NotionAPI {
  constructor({ tipeDB }) {
    // Meter case para verificacion de base de datos en notion

    this._tipeDB = (() => {
      if (tipeDB === 'Products') {
        console.log(confNot.databaseIdProducts)
        return confNot.databaseIdProducts;
      }
      if (tipeDB === 'Users') {
        return confNot.databaseIdUsers;
      }
      if (tipeDB === 'PostInsta') {
        return confNot.databaseIdPostInstagram;
      }
      else {
        return 'Error';
      }
    })();
  }

  async viewDatabases() {
    try {
      console.log(this._tipeDB)
      const result = getNotionData({ database_id: this._tipeDB });
      return result;
    } catch (err) {
      console.log('Error Class.service', error);
    }
  }
  async viewProducts() {
    try {
      const result = await getNotionData({database_id: this._tipeDB});
      return result;
    } catch (error) {
      console.log('Error Class.service', error);
    }
  }
  async createInDatabase(body) {
    try {
      const result = await createNotionData({ database_id: this._tipeDB, body });
      return result;
    } catch (error) {
      console.log('Error Class.service', error);
    }
  }
  async updateInDatabase({page_id,body}){
    try {
      const result = await updateInDatabase({page_id,body})
      return result
    } catch (error) {

    }
  }
}

module.exports = NotionAPI;
