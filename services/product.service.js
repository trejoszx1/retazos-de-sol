const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');
class ProductService {
  constructor() {}

  async create(data) {
    const newUser = await models.Product.create(data,{
     iclude: ['category']  //visualisar la relacion
    });
    return newUser;
  }

  async find() {
    const rta = await models.Product.findAll(
      {
        include: ['category']
      }
    );
    return rta;
  }

  async findOne(id) {
    const product = await models.Product.findByPk(id);
    if (!user) {
      throw boom.notFound('Product not found');
    }
    return product;
  }

  async update(id, changes) {
    const product = await this.findOne(id);
    const rta = await product.update(changes);
    return rta;
  }

  async delete(id) {
    const product = await this.findOne(id);
    await product.destroy();
    return { id };
  }
}

module.exports = ProductService
