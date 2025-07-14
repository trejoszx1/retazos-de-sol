const NotionAPI = require('../../controllers/notion/index.js')


//const {pool} = require('./../libs/postgres')



class NotionServices extends NotionAPI{
    constructor({tipeDB}){
      super({tipeDB})
    }
    async viewProducts(){
      try {
        const result = await super.viewProducts()

        return result

      } catch (error) {
        console.log("Error API.service.notion",error)
      }


    }

}



module.exports = NotionServices
