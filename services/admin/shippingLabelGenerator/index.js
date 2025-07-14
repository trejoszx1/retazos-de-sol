
const generatePdf = require('./../../../controllers/shoppingGenerate/index.js')


 class ShippingLabelGenerator{
  constructor(){}
   async generateService(){

    const showData =await generatePdf()
     console.log(await showData)

     return await showData
  }
}

module.exports = ShippingLabelGenerator
