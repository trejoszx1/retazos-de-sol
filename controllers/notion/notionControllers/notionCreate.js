const notion = require('./loging')

const {parent,title,text,checkbox,date ,multi_select} = require("./schemas/schema")
const  {confNot} = require('./../../../config/config')
const  {} =require('./schemas/schema')


const createIntoParent = {database_id : confNot}
const propertiesInParent = {}




function createProduct(
  {
  database_id ,
  body
}) {



const result = notion.pages.create({
   ...parent(database_id),
   properties: {
     ...title({id:"title",text:body.name}),
     ...multi_select({id:"Rg%5B%60"})
   }
 })

return result
}


module.exports = createProduct


