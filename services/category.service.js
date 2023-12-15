const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CategoryService {

  constructor() {}

  async find() {
    const rta = await models.Category.findAll({
      include: ['user']   //quiero resolver la relacion de User // para tener una resolber anidadamente {{}}
    });
    return rta;
  }

  async findOne(id) {
    const user = await models.Category.findByPk(id);
    if (!user) {
      throw boom.notFound('Customer not found');
    }
    return user;
  }


  async create(data) {
    const newCustomer = await models.Category.create(data, {
      include: ['product']
    });
    return newCustomer;
  }

  async update(id, changes) {
    const model = await this.findOne(id);
    const rta = await model.update(changes);
    return rta;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { rta: true };
  }

}

module.exports = CategoryService;
