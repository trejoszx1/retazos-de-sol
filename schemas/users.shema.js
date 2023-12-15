
const Joi = require('joi');


const id = Joi.string()
const nickname = Joi.string();
const email = Joi.string().email();
const cc = Joi.number().integer().min(10)
const birthday = Joi.date()
const role = Joi.string().min(5);
const password = Joi.string().min(8);

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  role: role //role.required()
});

const updateUserSchema = Joi.object({
  email: email,
  role: role,
  nickname: nickname,
  cc: cc,
  birthday: birthday,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }

