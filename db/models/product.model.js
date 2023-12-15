const { Model, DataTypes, Sequelize } = require('sequelize');

const { CATEGORY_TABLE } = require('./category.model');

const PRODUCT_TABLE = 'products';

const ProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  detail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  typology: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pattern: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  material: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  size: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  countryOrigin: {
    field: 'country_of_origin',
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  process: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salePrice: {
    field: 'sale_price',
    type: DataTypes.STRING,
    allowNull: true,
  },
  purchasePrice: {
    field: "purchase_price",
    type: DataTypes.STRING,
    allowNull: true,
  },

  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  updateAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'update_at',
    defaultValue: Sequelize.NOW,
  },
//Relation
  categoryId: {
    field: 'category_id',
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: CATEGORY_TABLE,
      key: 'id'
    },
//orderId:{
//  filed: 'orders_id',
//  allowNull: false,
//}
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
};

class Product extends Model {
  static associate(models) {
    this.belongsTo(models.Category, { as: 'category' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: false,
    };
  }
}

module.exports = { Product, ProductSchema, PRODUCT_TABLE };
