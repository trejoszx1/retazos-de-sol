const { Client } = require('@notionhq/client');
require('dotenv').config()

const notion = new Client({ auth: process.env.NOTION_TOKEN})

//read data to page
//--------------------///
async function getDatabase(){
    const response = await notion.databases.retrieve({
        database_id: process.env.NOTION_DATABASE_ID,
    })
    const tagss = [process.env.NOTION_TAGS_ID]
    const propertiesS = response.properties

    const id = Object.values(propertiesS);

    console.log( id)

    function notionPropertiesById(properties) {
      return Object.values(properties).reduce((obj, property) => {
        const { id, ...rest } = property;
        return { ...obj, [id]: rest };
      }, {});
    }
    //const statusEstado = await notion.pages.properties.retrieve({
    //  page_id: [process.env.NOTION_ESTADO],
//
    //})
    //console.log( statusEstado)

}

function createSuggestion({ prenda, description, baul, precioCompra,  coleccionActual , tags}) {
    notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID,
      },
      properties: {
        ///---Name---///
        [process.env.NOTION_TITLE_ID]: {
          title: [
            {
              type: "text",
              text: {
                content: prenda,
              },
            },
          ],
        },
        [process.env.NOTION_DESCRIPTION]: {
          rich_text: [
            {
              type: "text",
              text: {
                content: description,
              },
            },
          ],
        },
        [process.env.NOTION_BAUL]:{
          checkbox: baul,
        },
        [process.env.NOTION_COLECCION_ACTUAL]:{
          checkbox: coleccionActual,
        },
        [process.env.NOTION_PRECIO_DE_COMPRA]: {
          number: precioCompra,
        },
        ///--Selection---///
        //[process.env.NOTION_TAGS_ID]: {
        //  multi_select: tags.map((tag) => {
        //    return { id: tag.id };
        //  }),
        //},
      },
    });
  }
  //getTags().then(res => console.log(res))
  function fromNotionObject(notionPages) {
    const propertiesById = notionPropertiesById(notionPages.properties);
    return {
      id: notionPages.id,
      title: propertiesById[process.env.NOTION_TITLE_ID].title[0].plain_text,
      ///votes : propertiesById[process.env.NOTION_NUMBER_ID].number,
      ///tags: propertiesById[process.env.NOTION_TAGS_ID].multi_select.map(
      ///  (option) => {
      ///    return { id: option.id, name: option.name };
      ///  }
      ///),
      ///isProject: propertiesById[process.env.NOTION_STOCK_ID].checkbox,
      description:
        propertiesById[process.env.NOTION_DETALLES].rich_text[0].text.content,
    };
  }


  async function getSuggestion(pageId){
    return fromNotionObject(await notion.pages.retrieve({ page_id: pageId }))
  }
//   createSuggestion({
//      prenda:'Prenda de prueba',
//      description:'Esta es la descripcion de la prenda',
//      baul: true,
//      precioCompra: 123456,
//  })

//const fechaActual = new Date();
//const fechaISO = fechaActual.toISOString();
//console.log(fechaISO);

getDatabase()

//getSuggestion('dtmg')
