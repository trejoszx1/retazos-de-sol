const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { config } = require('../config/config');
const router = express.Router();
const validationHandler = require('../middlewares/validator.handler')
const AuthService = require('../services/auth.service');
const { recoveryAuthSchema, loginAuthSchema, changePasswordAuthSchema } = require('../schemas/auth.schema');
const service = new AuthService();

router.post(
  '/login',
  validationHandler(loginAuthSchema,'user'),
  passport.authenticate('local', { session: false }),

  async (req, res, next) => {
    try {
      const user = req.user;
      const rst = await service.signToken(user)
      res.status(201).json(rst);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/recovery',
  validationHandler(recoveryAuthSchema, 'body'),
  async (req, res, next) => {
  try {
    const { email } = req.body;
    const rta = await service.sendRecovery(email);
    res.status(201).json(rta);
  } catch (error) {
    next(error);
  }
});

router.post(
  '/change-password',
  validationHandler(changePasswordAuthSchema, 'body'),
  //capa de validacion de datos para el req.body,
  async (req, res, next) => {
    try {
      const { token, newPassword } = req.body;

      const rta = await service.changePassword(token, newPassword);
      res.status(201).json(rta);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
