const express = require('express');
const passport = require('passport');
const { checkRoles } = require('./../../middlewares/auth.handler');



const ShippingLabelGenerator= require('../../services/admin/shippingLabelGenerator');

const router = express.Router();
const service = new ShippingLabelGenerator();


router.get(
  '/',
  //passport.authenticate('jwt', { session: false }),
  //checkRoles('admin'),
  async (req, res, next) => {
    try {
      //res.send('a')
      const resp =  await service.generateService()
      res.status(201).download(resp.namePath)
      
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
