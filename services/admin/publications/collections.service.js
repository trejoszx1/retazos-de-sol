
const boom = require('@hapi/boom');
const { models } = require('./../../../libs/sequelize');


const {
  listFiles,
  createPath,
  createDir,
  removeDir
} = require('../../../controllers/fs/fsUtil');

const moment = require('moment');

const formatDate = 'YYYY-MM-DD-HH-MM-SS';
const now = moment();

class Collections {
  constructor() {
    this.nameOfCollection = null;
    this.garmentsId = null;
    this.dateOfPublication = null;
    this.stateOfCollection = 'Edition';
    this.pathOfCollection = [];
  }



  async find() {
    const rta = await models.Collection.findAll({
      include: ['garments'],
    });
    return rta;
  }

  async findOne({id}){
    const collection = await models.Collection.findByPk(id,{
      include:[
        {
          association:'garments',
        }
      ]
    })
    if (!collection) {
      throw boom.notFound('collection not found')
    }

    return collection
  }


  async create({ item }) {
    try {
      const dateCreate = now.format(formatDate);
      const numberWeek = now.isoWeekday();
      const CollectionPath = `Coleccion--${numberWeek}--${dateCreate}`;
      const routePath = await createDir(`./uploads/${CollectionPath}`);

      const data = {
        nameOfCollection: item.nameOfCollection | this.nameOfCollection,
        dateOfPublication: this.dateOfPublication,
        stateOfCollection: this.stateOfCollection,
        pathOfCollection: item.pathOfCollection | routePath,
        garmentsId: this.garmentsId,
        collectionId: [],
      };

      const result = models.Collection.create(data)


      return result;
    } catch (error) {
      return error;
    }
  }
  async delete({id}){
    try {
      const model = await this.findOne({id})
      console.log()
      const pathdelet = await removeDir(model.dataValues.pathOfCollection)

      await model.destroy();
      return {rta: pathdelet}

    } catch (error) {
      console.log(error)
      throw boom.notFound
    }

  }

  async update({ item, id }) {
    console.log('ITEM', item)
    const collection = await  this.findOne({ id });
    console.log('COLLECTION = ',collection)
    const rta = await collection.update(item);
    return rta;
  }

  async syncForFolders({path}){
    const folderInPath = (await listFiles(path)).map(item =>  `${path}/${item}`)

    const data = await (await this.find()).map(item =>   {
      const path = item.dataValues.pathOfCollection
      if (path == null) {
        ''
      }
    }     )

    const result =  data.filter(element => !folderInPath.includes(element != null) )

    console.log( data )


    //const rlt = folderInPath.forEach(listOfPath => {
    //  this.create({item:{
    //    pathOfCollection:listOfPath
    //  }})
    //});

    //return rlt

  }

  createGarments({ item, id }) {
    const CreatePrendaColection = new Garments();
    const garment = CreatePrendaColection.create({ item, id });
    return garment;
  }
  garmentSerachByID({ id }) {
    const searchGarment = new Garments();
    return searchGarment.serachByID({ id });
  }
}

module.exports = Collections;
