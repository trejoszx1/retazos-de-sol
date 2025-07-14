const express = require('express');
const CategoryService = require('../services/category.service');
const validationHandler = require('../middlewares/validator.handler');
const {
  createCategorySchema,
  getCategorySchema,
  updateCategorySchema,
} = require('../schemas/category.schema');
const passport = require('passport');
const { checkRoles } = require('../middlewares/auth.handler');

const router = express.Router();
const service = new CategoryService();

router.get('/',
passport.authenticate('jwt', { session: false }),
  checkRoles('customer', 'admin','seller'),
  async (req, res, next) => {
  try {
    res.json(await service.find());
  } catch (error) {
    next(error);
  }
});
router.get('/:id',
passport.authenticate('jwt', { session: false }),
  checkRoles('admin', 'customer','seller'),
  async (req, res, next) => {
  try {
    const {id} = req.params
    res.json(await service.findOne(id));
  } catch (error) {
    next(error);
  }
});

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin'),
  validationHandler(createCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      console.log(body);
      res.status(201).json(await service.create(body));
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin', 'seller'),
  validationHandler(updateCategorySchema, 'body'),
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

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin', 'seller'),
  async (req, res, next) => {
    try {
      console.log(req.params)
      const { id } = req.params;
      await service.delete(id)
      res.status(200).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
