const {config}= require('../../../config/config')

const Collections = require('./collections.service')
const Garments = require('./garments.service')




const { models } = require('./../../../libs/sequelize');


const short = require('short-uuid');
const shortUUID = require('uuid');
const translator = short();
const newId = translator.uuid();


class Publishing {}



const database = async() =>{


  //const garments = new Garments()
//
  ////const data = await garments.create({item:{}})
  ////console.log('Data = ',garments)
  ////const resul = await models.Collection.create(data )
  //const data = await garments.create({item: {CollectionPath:'./uploads'}})
  //const result = await models.Garments.create(data)
  //console.log('Resultado',result)

  const id = 'ffa51e83-f1e7-4855-a0ca-c0eaaf1da147'




  const collections = new Collections()
  //await collections.create({item: {nameOfCollection:'navidad'}})

  //- findOne
  //const finded = await collections.findOne({id})
  //console.log(finded.dataValues)


  //- syncForFolders -//
  //const folders = await collections.syncForFolders()
  //console.log('Folder = ',folders)


  //- DELETE -//
  //const data = await collections.delete({id: id})
  //console.log(data)


  //-   UPDATE    -//
  //const item ={nameOfCollection: 'Coleccion de diciembre'}
  //const update = await collections.update({item:item , id:id})
  //console.log(update)



  //- FIND -//
  //const result1 = await collections.find()
  //console.log(result1)

  //- CREATE -//
  //const data = await collections.create({item: {CollectionPath:'./uploads'}})
  //const result = await models.Collection.create(data)
  //console.log('Resultado',result)

  //- FINDALL - //
  //const result = await models.Collection.findAll()
  //console.log(result)
}

database()







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
