const express = require('express');
const validatorHandler = require('../../middlewares/validator.handler');
const NotionServices = require('../../services/admin/notion.services');


  const router = express.Router();

  router.get('/', async (req,res ,next) =>{
    try {
      res.status(202).json('Hey Post')
    } catch (error) {
      next(error)
      console.error(error)

    }
  })

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



module.exports = router;
