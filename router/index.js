const express =  require('express');

const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const customersRouter = require('./customers.router');
const categoriesRouter = require('./users.router');
const ordersRouter = require('./orders.router');
const adminRouter = require('./admin/index');

const router = express.Router();

function routerApi(app){

  app.use('/api/v1', router)
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/customers', customersRouter);
  router.use('/categories', categoriesRouter);
  router.use('/orders', ordersRouter);
  router.use('/admin',adminRouter);



}

  router.get('/', async (req,res ,next) =>{
    res.status(202).json('Hey api v1')
  })

module.exports = routerApi;
