const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nickname: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
  activationStatus: {
    field: 'activation_status',
    allowNull: true,
    type: DataTypes.BOOLEAN,
  },
  lastLogin: {
    field: 'last_login',
    allowNull: true,
    type: DataTypes.DATE,
  },
  birthday: {
    allowNull: true,
    type: DataTypes.DATE,
  },

  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'customer'
  },
  fullName: {
    field: 'full_name',
    allowNull: true,
    type: DataTypes.DATE,
  },


  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: Sequelize.NOW
  }


}


class User extends Model {
  static associate(models) {
    this.hasOne(models.Customer, {
      as: 'customer',
      foreignKey: 'userId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: true
    }
  }
}


module.exports = { USER_TABLE, UserSchema, User }
