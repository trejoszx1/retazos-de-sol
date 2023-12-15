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
  res.status(201).json(result.results);
});
router.post(
  '/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res, next) => {
    const notionServices = new NotionServices({ tipeDB: 'PostInsta' });
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
