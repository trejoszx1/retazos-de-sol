

// Row Notion

const users = require('./users.notion')

async function getUsers(){
  users()


}

const {Conf} = require('./config')



console.log(Conf.database_products)

///










require("dotenv").config();

const { Client } = require("@notionhq/client");

const database_id = process.env.NOTION_DATABASE_ID


const { raw } = require("express");
//const { route } = require("./routes/materia.router");

const notion = new Client({ auth: process.env.NOTION_TOKEN });


async function getNotionData(){
  const notionPages = await notion.databases.query({
    database_id: database_id,
  });
  console.log(notionPages.results[0].properties.id[process.env.NOTION_INGRESO] )


  const notionData = notionPages.map((result) => {
    return{
      x: new Date(result.id[process.env.NOTION_INGRESO]).getTime(),
      y: parseFloat(result.id[process.env.NOTION_PRECIO_DE_COMPRA]) ,
    };
     });
     return notionData;


};



async function getTags() {
  const database = await notion.databases.retrieve({
    database_id: process.env.NOTION_DATABASE_ID,
  });

  //console.log(database.properties.procesos.multi_select.options.map(option => {
  //  return { id: option.id, name: option.name };
  //}))

  // VER ESPECIFICO SELECT
  //console.log("multi select",database.properties.multi.multi_select) // VER ESPECIFICO SELECT

  //console.log(notionPropertiesById(database.properties))

  return notionPropertiesById(database.properties)[
    process.env.NOTION_PROCESO
  ].multi_select.options.map((option) => {
    return { id: option.id, name: option.name };
  });
}

function notionPropertiesById(properties) {
  return Object.values(properties).reduce((obj, property) => {
    // coje un array y lo reduce un solo valor , y  retorna un solo valor
    const { id, ...rest } = property;
    return { ...obj, [id]: rest };
  }, {});
}

async function deletePage(page){
  try {


    const del =  await notion.blocks.delete({ block_id: page});
    console.log("delete" , del);


  } catch (error) {
    console.error(error.body)
    console.log("error try")

  }
}

function createSuggestion(
  {
  title,
  description,
  baul,
  coleccionActual,
  precioCompra,
  fechaActual,
  //estado,
  proceso,
}) {



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
              content: title,
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
      [process.env.NOTION_BAUL]: {
        checkbox: baul,
      },
      [process.env.NOTION_COLECCION_ACTUAL]: {
        checkbox: coleccionActual,
      },
      [process.env.NOTION_PRECIO_DE_COMPRA]: {
        number: precioCompra,
      },

      ///--date--///
      [process.env.NOTION_INGRESO]: {
        type: "date",
        date: {
          start: fechaActual,
          end: null,
        },
      },
      //--Estado--//
      //[process.env.NOTION_ESTADO]: {
      //  type: "status",
      //  status: {
      //    id: estado,
      //  },
      //},
      [process.env.NOTION_PROCESO]: {
        type: "multi_select",
        multi_select: proceso.map((proces) => {
          return { id: proces.id };
      }
      ),

      },
    },
  });
}
async function getSuggestions() {
  const notionPages = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    sorts: [
      {
        property: process.env.NOTION_INGRESO,
        direction: "descending",
      },
    ],
  });

  return notionPages.results.map(fromNotionObject);
}

function fromNotionObject(notionPages) {
  const propertiesById = notionPropertiesById(notionPages.properties);

  //console.log(propertiesById[process.env.NOTION_DESCRIPTION].rich_text.map(
  //  (item) => {
  //    return { plain_text: item.plain_text };
  //  })  )

  //console.log(propertiesById[process.env.NOTION_PROCESO].multi_select.map(
  //  (item) => {
  //    return { id: item.id, name: item.name };
  //  }
  //))

  //console.log(propertiesById[process.env.NOTION_TITLE_ID].title[0].plain_text);
  //console.log(propertiesById[process.env.NOTION_DESCRIPTION].rich_text.map(
  //  (item) => {
  //    return { id: item.id, name: item.name };
  //  }))

  return {
    id: notionPages.id,
    title: propertiesById[process.env.NOTION_TITLE_ID].title[0].text.content,
    description: propertiesById[process.env.NOTION_DESCRIPTION].rich_text,

    //.map(
    //  (item) => {
    //    return { plain_text: item.plain_text };
    //
    //)
    baul: propertiesById[process.env.NOTION_BAUL].checkbox,
    coleccionActual:
      propertiesById[process.env.NOTION_COLECCION_ACTUAL].checkbox,
    precioCompra: propertiesById[process.env.NOTION_PRECIO_DE_COMPRA].number,

    proceso: propertiesById[process.env.NOTION_PROCESO].multi_select,
    //map((item) => {
    //    return { id: item.id, name: item.name };
    //  }
    //),
    estado: propertiesById[process.env.NOTION_ESTADO].status, //[0].map(
    //  (option) => {
    //    return { id: option.id,  name: option.name};
    //  }
    //)
    fechaActual: propertiesById[process.env.NOTION_INGRESO].date.start,
  };
}
async function upVoteSuggestion(pageId) {
  const suggestion = await getSuggestion(pageId);
  const votes = suggestion.votes + 1;
  await notion.pages.update({
    page_id: pageId,
    properties: {
      [process.env.NOTION_NUMBER_ID]: { number: votes },
    },
  });
  return votes;
}

async function getSuggestion(pageId) {
  return fromNotionObject(await notion.pages.retrieve({ page_id: pageId }));
}
//async function example(pageId){
//  const pages = await notion.pages.properties.retrieve({page_id: pageId});
//  console.log(pages)
//}

module.exports = {
  createSuggestion,
  getTags,
  getSuggestions,
  upVoteSuggestion,
  deletePage,
  getNotionData,
  getUsers,
};

////------Send data--------////
//createSuggestion({
//  title: "AA Prenda de prueba",
//  baul: true,
//  coleccionActual:true,
//  fechaActual: new Date().toISOString(),
//  description: "Esta es la descripcion de la prenda",
//});


// createSuggestion({
//    title:'AA Prenda de prueba',
//    description:'Esta es la descripcion de la prenda',
//    baul: true,
//    precioCompra: 1234567891011,
//    coleccionActual:true,
//    fechaActual:new Date().toISOString(),
//    estado: "bf5fe027-045f-47d8-938d-2ee485bf061c",
//    proceso: "299a8158-abfc-44a0-b7eb-cc4d36ff9b37"
//});

// {
//   title: 'Nombre de la prenda',
//   description: 'Descripcion',
//   baul: false,
//   coleccionActual: false,
//   precioCompra: '12',
//   fechaActual: '2023-03-28T02:02:03.292Z'
// }

//(async ()=>{
//  const res = await getSuggestions()
//  console.log( res)
//})()
//getTags().then(res => console.log(res))  // debuelve los tags

//https://www.youtube.com/watch?v=zVfVLBjQuSA
