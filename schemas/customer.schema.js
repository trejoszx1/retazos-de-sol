const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const lastName = Joi.string();
const phoneNumber1 = Joi.string();
const phoneNumber2 = Joi.string();
const userId = Joi.number().integer();
const city = Joi.string();
const neighborhood = Joi.string();
const address = Joi.string();
const biography = Joi.string();

//user
const email = Joi.string().email();
const password = Joi.string();

//

const getCustomerSchema = Joi.object({
  id: id.required(),
});

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phoneNumber1: phoneNumber1.required(),
  user: Joi.object({
    email: email.required(),
    password: password.required(),
  }),
});

const updateCustomerSchema = Joi.object({
  name,
  lastName,
  phoneNumber1,
  phoneNumber2,
  userId,
  city,
  neighborhood,
  address,
  biography,
});

module.exports = {
  getCustomerSchema,
  createCustomerSchema,
  updateCustomerSchema,
};
