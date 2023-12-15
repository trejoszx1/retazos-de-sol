const boom = require('@hapi/boom');

const moment = require('moment');

const { models } = require('./../../../libs/sequelize');


const {
  readPath,
  createPath,
  createDir,

} = require('../../../controllers/fs/fsUtil');
const short = require('short-uuid');
const shortUUID = require('uuid');
const translator = short();
const newId = translator.uuid();

const formatDate = 'YYYY-MM-DD HH:MM:SS';
const now = moment();



class Publishing {}

class Garments {
  constructor() {
    this.id = newId;
    this.idInstagram = '';
    this.state = 'Edition';
    this.numberOfPublication = null;
    this.imagesPath = [] |'';
    this.folderPath = '';
    this.ReadyForPublication = false;
    this.dateOfpublication = '';
    //this.createdAt = now.format(formatDate);
    this.descriptions = '';
  }

  async create({ item }) {
    const folderPath = `Prenda--${this.createdAt}-${this.id}`;
    const data = {
      id: this.id,
      folderPath: await createDir(`${item.CollectionPath}/${folderPath}`),
      idInstagram: this.idInstagram,
      state: this.state,
      numberOfPublication: this.numberOfPublication,
      imagesPath: this.imagesPath,
      ReadyForPublication: this.ReadyForPublication,
      dateOfpublication: item.dateOfPublication | '',
      //dateCreate: this.dateCreate,
      descriptions: item.descriptions | '',
    }
    console.log('DATA= ',data)

    return data

  }
  serachByID({ id }) {
    return data.find((item) => item.garmentsIds.id === id);
  }
}

class Collections {
  constructor() {
    //this.id = newId;
    this.nameOfCollection = '';
    this.garmentsIds = [];
    this.dateCreate = now.format(formatDate);
    this.dateOfPublication = '';
    this.state = 'Edition';
    this.pathOfCollection = [];
  }
  async find(){
    const rta = await models.Collection.findAll({
      include: ['garments']
    });
    return rta;
  }

//* check the connection with the database *//
  async create({ item }) {
    try {
      const numberWeek = now.isoWeekday();
      const CollectionPath = `Coleccion--${numberWeek}--${this.dateCreate}-${this.id}`;
      const routePath = await createDir(`./uploads/${CollectionPath}`);
      const data= {
        //id: this.id,
        nameOfCollection: item.nameOfCollection | this.nameOfCollection,
        //garmentsIds: this.garmentsIds,
        //dateCreate: this.dateCreate,
        dateOfPublication: this.dateOfPublication,
        //state: this.state,
        //pathOfCollection: routePath ,
        collectionId: ''
      }

      return data
    } catch (error) {
      return error;
    }
  }

  serachByID({ id }) {
    return data.find((item) => item.id === id);
  }


  update({item, id}){
    const colection = this.serachByID({id})
     colection.garmentsIds.push(item)
     return data

  }

  createGarments({ item , id}) {
    const CreatePrendaColection = new Garments();
    const garment = CreatePrendaColection.create({item ,id });
    return garment;
  }
  garmentSerachByID({ id }) {
    const searchGarment = new Garments()
    return searchGarment.serachByID({id})
  }
}




const database = async() =>{


  //const garments = new Garments()
//
  ////const data = await garments.create({item:{}})
  ////console.log('Data = ',garments)
  ////const resul = await models.Collection.create(data )
  //const data = await garments.create({item: {CollectionPath:'./uploads'}})
  //const result = await models.Garments.create(data)
  //console.log('Resultado',result)



  const collections = new Collections()

  const data = await collections.create({item: {nameOfCollection:'Solsticio'}})
  console.log(data)


  //const result1 = await models.Collection.findAll()
  //console.log(result1)
  const result = await models.Collection.create(data)
  console.log('Resultado',result)
}

//database()







const main = async (cb) => {

  const id = 'fe1W61uNyQCsH7a6jYyBrz';

  const collection = new Collection();


  //const resul = collection.serachByID({ id });

  const result2 = await collection.create({
    item: {
      descriptions: 'una nueva prenda',
      CollectionPath: './uploads',   },
    });

   //const postUp = colecion.update({item: result2, id})

  //garmentsIds
  console.log(result2)
  cb();
  //return await postUp;
};

const cb = () => {
  //data.flatMap((item) => {console.log(item.garmentsIds)})
};
//main(cb);
