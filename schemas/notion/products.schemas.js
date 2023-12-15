const Joi = require('joi');

const id = Joi.string().uuid();

const image = Joi.string();
const specialItem = Joi.bool();
const name = Joi.string().min(3).max(15);
const dateOfCollection = Joi.date();
const collectionActual = Joi.bool();
const typology = Joi.string();
const pattern = Joi.string();
const color = Joi.string();
const material = Joi.string();
const countryOrigin = Joi.string();
const brand = Joi.string();
const size = Joi.string();
const idRN = Joi.string();
const shoulderToShouldeMeasurement = Joi.string();
const tallMeasurement = Joi.string();
const sleeveMeasurement = Joi.string();
const widthMeasurement = Joi.string();
const bustMeasurement = Joi.string();
const pockets = Joi.string();
const waistMeasurement = Joi.string();
const hipMeasurement = Joi.string();
const legMeasurement = Joi.string();
const crotchMeasurement = Joi.string();
const statusNumber = Joi.string();
const detail = Joi.string();
const process = Joi.string();
const garmentCare = Joi.string();
const notesForRepair = Joi.string();
const averageTimeRepair = Joi.string();
const purchasePrice = Joi.string();
const internalInsoleMeasurement = Joi.string();
const externalInsoleMeasurement = Joi.string();

const salePrice = Joi.string();
const createdAt = Joi.string();
const orderId = Joi.string();
const price = Joi.number().integer().min(10);
const categoryId = Joi.number().integer();

const createProductSchema = Joi.object({
  image: image,
  specialItem: specialItem,
  name: name.required(),
  dateOfCollection: dateOfCollection,
  collectionActual: collectionActual,
  typology: typology,
  pattern: pattern,
  color: color,
  material: material,
  countryOrigin: countryOrigin,
  brand: brand,
  size: size,
  idRN: idRN,
  shoulderToShouldeMeasurement: shoulderToShouldeMeasurement,
  tallMeasurement: tallMeasurement,
  sleeveMeasurement: sleeveMeasurement,
  widthMeasurement: widthMeasurement,
  bustMeasurement: bustMeasurement,
  pockets: pockets,
  waistMeasurement: waistMeasurement,
  hipMeasurement: hipMeasurement,
  legMeasurement: legMeasurement,
  crotchMeasurement: crotchMeasurement,
  statusNumber: statusNumber,
  detail: detail,
  process: process,
  garmentCare: garmentCare,
  notesForRepair: notesForRepair,
  averageTimeRepair: averageTimeRepair,
  purchasePrice: purchasePrice,//.required(),
  internalInsoleMeasurement: internalInsoleMeasurement,
  externalInsoleMeasurement: externalInsoleMeasurement,
  salePrice: salePrice,
  createdAt: createdAt,//.required(),
  orderId: orderId,
  price: price,
  categoryId: categoryId,
});

const updateProductSchema = Joi.object({
  image: image,
  detail: detail,
  typology: typology,
  pattern: pattern,
  color: color,
  material: material,
  brand: brand,
  size: size,
  countryOrigin: countryOrigin,
  salePrice: salePrice,
  purchasePrice: purchasePrice,
  createdAt: createdAt,
  categoryId: categoryId,
  orderId: orderId,
  name: name,
  price: price,
  image: image,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };
