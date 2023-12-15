const Joi = require('joi');

const id = Joi.number().integer();
const sendPayment = Joi.boolean();
const shippingValue = Joi.number().integer();
const trunk = Joi.boolean();
const shipmentDeparture = Joi.string();
const totalPrice = Joi.number().integer();
const partialPayment = Joi.number().integer();
const urlPayment = Joi.string().uri();
const description = Joi.string().min(10);
const productId = Joi.number().integer();
const customerId = Joi.number().integer();
const amount = Joi.number().integer();
const orderId = Joi.number().integer().min(1);

const createOrderSchema = Joi.object({
  sendPayment: sendPayment.required(),
  shippingValue: shippingValue.required(),
  trunk: trunk.required(),
  shipmentDeparture: shipmentDeparture.required(),
  totalPrice: totalPrice,
  partialPayment: partialPayment,
  urlPayment: urlPayment,
  description: description.required(),
  productId: productId,

  customerId: customerId,

});

const updateOrderSchema = Joi.object({
  trunk: trunk,
  sendPayment: sendPayment,
  partialPayment: partialPayment,
  description: description,

});

const getOrderSchema = Joi.object({
  id: id.required(),
});

const addItemSchema = Joi.object({
  orderId: orderId.required(),
  productId: productId.required(),
  amount: amount.required(),
})

module.exports = { createOrderSchema, updateOrderSchema, getOrderSchema, addItemSchema }
