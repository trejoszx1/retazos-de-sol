const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CategoryService {

  constructor() {}

  async find() {
    const rta = await models.Category.findAll();
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
    const newCustomer = await models.Category.create(data);
    return newCustomer;
  }

  async update(id, changes) {
    const model = await this.findOne(id);
    const rta = await model.update(changes);
    return rta;
  }

  async delete(id) {
    try {
      const model = await this.findOne(id);
      const rst = await model.destroy();
      console.log(rst)
      return { rta: true };
    } catch (error) {
      console.log('Error',error)
    }

  }

}

module.exports = CategoryService;
