const { DataTypes, Sequelize, Model } = require('sequelize');

const { COLLECTION_TABLE } = require('./collection.model');

const GARMENTS_TABLE = 'garments';

const GarmentsScheme = {
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
  instagramId: {
    field: 'instagram_id',
    allowNull: true,
    type: DataTypes.TEXT,
  },
  stateOfGarments: {
    field: 'state_of_garments',
    allowNull: true,
    type: DataTypes.TEXT,
  },

  numberOfPublication: {
    field: 'number_of_publication',
    allowNull: true,
    type: DataTypes.INTEGER,
  },
  imagesPath: {
    field: 'images_path',
    allowNull: true,
    type: DataTypes.TEXT,
  },
  readyForPublication: {
    field: 'ready_for_publication',
    allowNull: true,
    type: DataTypes.BOOLEAN,
  },
  dateOfpublication: {
    field: 'date_of_publication',
    allowNull: true,
    type: DataTypes.DATE,
  },
  descriptions: {
    field: 'descriptions',
    allowNull: true,
    type: DataTypes.TEXT,
  },
};

class Garments extends Model {
  static associate(models) {
    this.hasOne(models.Collection, {
      as: 'collection',
      foreignkey: 'garmentsId',
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: GARMENTS_TABLE,
      modelName: 'Garments',
      timestamps: false,
    };
  }
}

module.exports = { Garments, GarmentsScheme, GARMENTS_TABLE };
