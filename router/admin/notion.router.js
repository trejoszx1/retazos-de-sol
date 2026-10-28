const express = require('express');

const moment = require('moment')

const NotionServices = require('../../services/admin/notion.services');


const router = express.Router();

const validatorHandler = require('./../../middlewares/validator.handler');

const {
  createProductSchema,
} = require('./../../schemas/notion/products.schemas');

//const pool = require('./../libs/postgres')
router.get('/', async (req, res, next) => {
  const notionServices = new NotionServices({ tipeDB: 'Products' });
  const result = await notionServices.viewDatabases();

  const ArrayData = result.results.map(item => {
    const porp = item.properties;
    return {
      nameOfGarment: porp["Prenda"]?.title?.[0]?.plain_text || null,
      imageOfGarment: porp["Primera Vista"]?.files?.[0] || null,
      priceOfGarment: porp["Precio"]?.number || null,
      // tagImage: porp["tagImage"]?.multi_select || null,
      typeOfGarment: porp['tipología de prenda ']?.multi_select || null,
      patternOfGarment: porp['Patrón']?.multi_select || null,
      colorOfGarment: porp["Color"]?.multi_select || null,
      materialOfGarment: porp["Material"]?.multi_select || null,
      originOfGarment: porp['Lugar de Origen']?.rich_text?.[0]?.plain_text || null,
      transformationPlace: porp['Lugar de Trasformacion']?.rich_text?.[0]?.plain_text || null,
      imageOfTheLabels: porp['imagenes de Marcas']?.files?.[0] || null,
      brandOfGarment: porp["Marca"]?.rich_text?.[0]?.plain_text || null,
      sizeOfGarment: porp['Talla o Tamaño']?.multi_select || null,
      rnCode: porp["RN"]?.rich_text?.[0] || null,
      shoulderToShoulder: porp['Hombro a Hombro']?.number || null,
      sleeveLength: porp["Manga"]?.rich_text?.[0] || null,
      garmentLengthFlow: porp["Largo"]?.number || null,
      chestWidth: porp["Pecho"]?.number || null,
      waistWidth: porp["Cintura"]?.number || null,
      hipWidth: porp["Cadera"]?.number || null,
      garmentWidth: porp["Ancho "]?.number || null,
      legLength: porp["Pierna"]?.number || null,
      // riseLength: porp["riseLength"]?.number || null,
      // pocketsCount: porp["pocketsCount"]?.number || null,
      // garmentCondition: porp["garmentCondition"]?.select?.name || null,
      // garmentDetails: porp["garmentDetails"]?.rich_text?.[0]?.plain_text || null
    }
  });

  res.status(200).json(ArrayData);
});



router.post(
  '/',
  //validatorHandler(createProductSchema, 'body'),
  async (req, res, next) => {
    const notionServices = new NotionServices({ tipeDB: 'Products' });
    try {
      const result = await notionServices.createInDatabase(req.body);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }
);



router.get('/insta', async (req, res, next) => {




  const notionServices = new NotionServices({ tipeDB: 'PostInsta' });
  const result = await notionServices.viewDatabases();

  const date = result.results.map(item=>item.properties.Date.date)

  let arraydates = []

  arraydates.push(...date)





  const result2 = arraydates.filter(element => {
    return element !== null
  })


const time = result2[0].start

const result3 = (time)=>{
  return new Promise((resolve, reject) => {
    const fechaActual = new Date().toISOString();
    const timespera = new Date(time).getTime() - new Data(fechaActual).getTime()

    if (timespera <= 0) {
      reject("El tiempo de espera ya ha pasado.");
    } else {
      setTimeout(() => {
        resolve("El evento ha ocurrido después del tiempo de espera.");
      }, timespera);
    }

  })
}
console.log(await result3)


  res.status(201).json(result);
});
module.exports = router;
