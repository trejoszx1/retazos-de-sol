const notion = require('./loging')
const {confNot} = require('./../../../config/config')


async function getNotionData({database_id}){
//console.log(database_id)
   const notionPages = await notion.databases.query({
    database_id: database_id,
  });

  const result = await notionPages  //result.length //[0].properties

  //console.log(result)

  return result




      /*.id[process.env.NOTION_INGRESO] )


    const notionData = notionPages.map((result) => {
      return{
        x: new Date(result.id[process.env.NOTION_INGRESO]).getTime(),
        y: parseFloat(result.id[process.env.NOTION_PRECIO_DE_COMPRA]) ,
      };
       });
       return notionData;

  */




  };





module.exports = getNotionData
