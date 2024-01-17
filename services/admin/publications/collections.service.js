
const boom = require('@hapi/boom');
const { models } = require('./../../../libs/sequelize');
const {config}= require('../../../config/config')
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
      const routePath = await createDir(`${config.pathOfFiles}${CollectionPath}`);

      const data = {
        nameOfCollection: (item.nameOfCollection? item.nameOfCollection :this.nameOfCollection),
        dateOfPublication: (item.dateOfPublication? item.dateOfPublication:  this.dateOfPublication),
        stateOfCollection: (item.stateOfCollection? item.stateOfCollection : this.stateOfCollection),
        pathOfCollection:  (item.pathOfCollection?   item.pathOfCollection: await routePath   ) ,
        garmentsId: (item.garmentsId? item.garmentsId: this.garmentsId),
      };
      const result = await models.Collection.create(data)
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

  async syncForFolders(){

    const folderInPath = (await listFiles(config.pathOfFiles)).map(item =>  `${config.pathOfFiles}/${item}`)

    const data = await (await this.find()).map(item =>  {
    return item.dataValues.pathOfCollection })



    const pathDataBase = []
    for (let index = 0; index < folderInPath.length; index++) {
      if (!data.includes(folderInPath[index])) {
        pathDataBase.push(folderInPath[index])
      }}

      console.log(pathDataBase)
      //console.log(data.filter(item=> { item? '' :item.include(`${config.pathOfFiles}`)  }  ))


      for (let index = 0; index < pathDataBase.length; index++) {
        this.create({item:{
          pathOfCollection:pathDataBase[index]
        }})

      }


    //console.log("DATA",await data)


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
