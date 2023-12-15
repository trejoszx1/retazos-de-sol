const { Model, DataTypes, Sequelize } = require('sequelize');
const { CUSTOMER_TABLE } = require('./customer.model');
const { PRODUCT_TABLE } = require('./product.model');

const ORDER_TABLE = 'orders';
const OrderSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  sendPayment: {
    field: 'send_payment',
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  shippingValue: {
    field: 'shipping_value',
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  trunk: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  shipmentDeparture: {
    field: 'shipment_departure',
    type: DataTypes.STRING,
    allowNull: true,
  },
  totalPrice: {
    field: 'total_price',
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  partialPayment: {
    field: 'partial_payment',
    type: DataTypes.STRING,
    allowNull: true,
  },
  urlPayment: {
    field: 'url_payment',
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    filed: 'shipment_departure',
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

  customerId: {
    field: 'customer_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CUSTOMER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE', //cuando se actualiza  o hace en cascada
    onDelete: 'SET NULL', // cuando se elimine set null
  },

  productId: {
    field: 'product_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PRODUCT_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE', //cuando se actualiza  o hace en cascada
    onDelete: 'SET NULL', // cuando se elimine set null
  },
};

class Order extends Model {
  static associate(models) {
    this.belongsTo(models.Customer, {
      as: 'customer',
    });
    this.belongsToMany(models.Product, {
      as: 'items',
      through: models.OrderProduct,
      foreignKey: 'OrderId',
      otherKey: 'ProductId',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_TABLE,
      modelName: 'Order',
      timestamps: false,
    };
  }
}
module.exports = { Order, OrderSchema, ORDER_TABLE };
