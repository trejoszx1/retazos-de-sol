const { DataTypes, Sequelize, Model } = require('sequelize');
const { GARMENTS_TABLE } = require('./garments.model');

const COLLECTION_TABLE = 'collection';

const CollectionScheme = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  createdAt: {
    field: 'created_at',
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  nameOfCollection: {
    field: 'name_of_collection',
    allowNull: true,
    type: DataTypes.TEXT,
  },

  dateOfPublication: {
    field: 'date_of_publication',
    allowNull: true,
    type: DataTypes.DATE,
  },
  stateOfCollection: {
    field: 'state_of_collection',
    allowNull: true,
    type: DataTypes.TEXT,
  },
  pathOfCollection: {
    field: 'path_of_collection',
    allowNull: true,
    type: DataTypes.TEXT,
  },
  garmentsId: {
    field: 'garments_id',
    allowNull: true,
    type: DataTypes.UUID,
    references: {
      model: GARMENTS_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },

};

class Collection extends Model {
  static associate(models) {
    this.belongsTo(models.Garments, { as: 'garments' });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: COLLECTION_TABLE,
      modelName: 'Collection',
      timestamps: false,
    };
  }
}

module.exports = { Collection, CollectionScheme, COLLECTION_TABLE };



/*  collectionId: {
    field: 'collection_id',
    type: DataTypes.UUID,
    allowNull: true,
    primaryKey: false,
  },
   */
