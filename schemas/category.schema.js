const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const image = Joi.string()
const description = Joi.string()
const price = Joi.number()

const getCategorySchema = Joi.object({
  id: id.required(),
});

const createCategorySchema = Joi.object({
  name: name.required(),
  image,
  description,
  price
});

const updateCategorySchema = Joi.object({
  name,
  image,
  description,

});

module.exports = {
  getCategorySchema,
  createCategorySchema,
  updateCategorySchema,
};
