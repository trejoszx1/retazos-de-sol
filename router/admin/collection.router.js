const express = require('express');
const router = express.Router();

const Collections= require('../../services/admin/publications/collections.service')

const collections = new Collections()

 router.get('/', async (req,res)=> {
  console.log('Result')
   const result = await collections.find
   res.status(201).json(result)

} )

module.exports= router
