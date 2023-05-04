const express = require ('express');
//const ProductsService = require('./../services/product.service');
//const validatorHandler = require('./../middlewares/validator.handler');
//const { createProductSchema, updateProductSchema, getProductSchema } = require('./../schema/product.schema');

const router = express.Router();

//const service = new ProductsService();



router.get('/', async (req,res) => {
  //const products = await service.find();
  //res.json(products);
  res.send("heyyyyy")
  //res.let  = JSON.stringify(obj);

});



router.get('/filter', (req, res)=>{
  res.send('Filter');
});

router.get('/:id',
  //validatorHandler(getProductSchema, 'params'),
  async (req,res, next)=>{
    try {
      const {id }= req.params;
      const product =  await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
   //validatorHandler(createProductSchema, 'body'),
   async (req,res )=>{
    res.send("hey")
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
});


router.patch('/:id',
  //validatorHandler(getProductSchema, 'params'),
  //validatorHandler(updateProductSchema , 'body'),
  async (req,res, next)=>{
  try {
    const {id} = req.params;
    const body = req.body;
    const produc =  await service.update(id, body);
    res.json(produc);
  } catch (error) {
    next(error);
  }

});
router.delete('/:id', async (req,res)=>{
  const {id} = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});

module.exports = router;
