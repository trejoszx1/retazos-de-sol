const { Model, DataTypes, Sequelize } = require('sequelize');

const CATEGORY_TABLE = 'categories'
const CategorySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description:{
    type: DataTypes.TEXT,
    allowNull: true,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  createAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
};
class Category extends Model {
  static associate(models) {
    this.hasMany(models.Product, {
      as: 'products',
      foreignKey:'categoryId'    //adonde resulve la relacion
     });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: 'Category',
      timestamps: false,
    };
  }
}
module.exports = { Category, CategorySchema, CATEGORY_TABLE };
