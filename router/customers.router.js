const express = require('express');

const {CustomerService,DataCustumer} = require('../services/customers.service.js');
const validationHandler = require('../middlewares/validator.handler');
const {
  createCustomerSchema,
  getCustomerSchema,
  updateCustomerSchema,
} = require('../schemas/customer.schema');
const { dataflow } = require('googleapis/build/src/apis/dataflow/index.js');

const router = express.Router();
const service = new CustomerService();
const serviceGo = new DataCustumer()

router.get('/google-sheets/',  async (req, res, next) => {
  try {
    
    var request =await serviceGo.find() 
    res.json(request)
    
  } catch (error) {
    console.log("--ERROR--",error)
  }
});

router.get('/google-sheets/:cel',  async (req, res, next) => {
  try {
    const { cel } = req.params;
    
    console.log(typeof cel)
    var request =await serviceGo.findByPhone(cel) 
    res.json(request)
    
  } catch (error) {
    console.log("--ERROR--",error)
  }
});
router.put('/google-sheets/:cel',  async (req, res, next) => {
  try {
    const { cel,body } = req.params;
    console.log(cel,body)
    var data = body
    var request =await serviceGo.UpdateByPhone({cel,data}) 
    res.status(201).json(request)
    
  } catch (error) {
    console.log("--ERROR--",error)
  }
});

router.post('/google-sheets/',
  async (req, res, next) => {
    try {
      const body = req.body;
      res.status(201).json(await serviceGo.create(body));
    } catch (error) {
      next(error);
    }
  }
)


router.get('/',  async (req, res, next) => {
  try {
    res.json(await service.find());
  } catch (error) {
    next(error);
  }
});

router.post('/',
  validationHandler(createCustomerSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      res.status(201).json(await service.create(body));
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validationHandler(getCustomerSchema, 'params'),
  validationHandler(updateCustomerSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      res.status(201).json(await service.update(id, body));
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validationHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      res.status(200).json(await service.delete(id));
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
