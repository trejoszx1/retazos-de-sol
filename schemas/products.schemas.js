const Joi = require('joi');

const id = Joi.string().uuid();
const image = Joi.string();
const detail = Joi.string();
const typology = Joi.string();
const pattern = Joi.string();
const color = Joi.string();
const material = Joi.string();
const brand = Joi.string();
const size = Joi.string();
const countryOrigin = Joi.string();
const state = Joi.string();
const process = Joi.string();
const salePrice = Joi.string();
const purchasePrice = Joi.string();
const createdAt = Joi.string();

const orderId = Joi.string();

const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const categoryId= Joi.number().integer();

const createProductSchema = Joi.object({
  typology: typology.required(),
  pattern: pattern.required(),
  color: color.required(),
  material: material.required(),
  brand: brand.required(),
  size: size.required(),
  countryOrigin: countryOrigin.required(),
  state: state.required(),
  process: process.required(),
  salePrice: salePrice,
  purchasePrice: purchasePrice.required(),
  detail: detail.required(),
  image: image,
  price: price,
  categoryId: categoryId,
});



const updateProductSchema = Joi.object({
  image : image ,
  detail : detail ,
  typology : typology ,
  pattern : pattern ,
  color : color ,
  material : material ,
  brand : brand ,
  size : size ,
  countryOrigin : countryOrigin ,
  state : state ,
  salePrice : salePrice ,
  purchasePrice : purchasePrice ,
  createdAt : createdAt ,
  categoryId : categoryId ,
  orderId : orderId ,
  name: name,
  price: price,
  image: image,

});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema }
