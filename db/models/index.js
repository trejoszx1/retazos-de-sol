const { User, UserSchema } = require('./user.model.js');
const { Product, ProductSchema } = require('./product.model');
const { Customer, CustomerSchema } = require('./customer.model');
const { Category, CategorySchema } = require('./category.model');
const { Order, OrderSchema } = require('./order.model');
const {
  OrderProduct,
  OrderProductScheme,
} = require('./order-product.model.js');

const { Collection, CollectionScheme } = require('./collection.model.js');
const { Garments, GarmentsScheme } = require('./garments.model.js');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize)); // se exporta User
  Product.init(ProductSchema, Product.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  OrderProduct.init(OrderProductScheme, OrderProduct.config(sequelize));

  Garments.init(GarmentsScheme, Garments.config(sequelize));
  Collection.init(CollectionScheme, Collection.config(sequelize));

  ////////////////////////////////////////////////////

  User.associate(sequelize.models);
  Product.associate(sequelize.models);
  Customer.associate(sequelize.models); //asociacion db
  Category.associate(sequelize.models);
  Order.associate(sequelize.models);
  OrderProduct.associate(sequelize.models);

  Garments.associate(sequelize.models);
  Collection.associate(sequelize.models);
}

module.exports = setupModels;
// MAIN principal de sequelize
