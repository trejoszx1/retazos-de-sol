const notion = require('./loging')

const {parent,title,text,checkbox,date ,multi_select} = require("./schemas/schema")
const  {confNot} = require('./../../../config/config')
const  {} =require('./schemas/schema')


const createIntoParent = {database_id : confNot}
const propertiesInParent = {}




function updateNotionData(
  {
  page_id ,
  body
}) {





const checkboxTool =  body.checkbox.map((item) =>checkbox({ id: item.id, truOrFalse: item.bool}))

const properties =Object.assign({}, ...checkboxTool)

console.log(properties)



const result = notion.pages.update({
  page_id,
  properties

//   properties: {
//    checkboxTool
//    // ...title({id:"title",text:body.name}),
//    // ...multi_select({id:"Rg%5B%60"})
//    //...checkbox({id: body.checkboxId, truOrFalse: body.checkboxBool})
//
//   }
 })

return result

}


module.exports = updateNotionData


