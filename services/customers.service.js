const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const bcrypt = require('bcrypt')

const { ConfGoogle } = require('../config/config');
const spreadsheetId = ConfGoogle.spreadsheetId;

const GoogleSheets = require('../services/admin/googleapis.service');

var fechaFormateada = () => {
  // Obtener la fecha actual
  const fechaActual = new Date();

  // Función para agregar ceros a la izquierda
  const agregarCero = (numero) => (numero < 10 ? '0' + numero : numero);

  // Extraer los componentes de la fecha
  const dia = agregarCero(fechaActual.getDate());
  const mes = fechaActual.getMonth() // Los meses son 0-indexed
  const anio = fechaActual.getFullYear();
  const horas = agregarCero(fechaActual.getHours());
  const minutos = agregarCero(fechaActual.getMinutes());
  const segundos = agregarCero(fechaActual.getSeconds());

  // Formatear la fecha y hora
  const fechaFormateada = `${dia}/${mes}/${anio} ${horas}:${minutos}:${segundos}`;

  return fechaFormateada;
}




const serviceSheets = new GoogleSheets()
class CustomerService {

  constructor() { }

  async find() {
    const rta = await models.Customer.findAll({
      include: ['user']   //quiero resolver la relacion de
    });
    return rta;
  }

  async findOne(id) {
    const customer = await models.Customer.findByPk(id);
    if (!customer) {
      throw boom.notFound('customer not found');
    }
    return customer;
  }


  async create(data) {

    const newCustomer = await models.Customer.create(data, {
      include: ['user']
    });
    delete newCustomer.dataValues.user.dataValues.password
    return newCustomer;
  }

  async update(id, changes) {
    const model = await this.findOne(id);
    const rta = await model.update(changes);
    return rta;
  }


  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { rta: true };
  }


}

class DataCustumer {
  async find() {
    var res = await serviceSheets.getRows({ range: 'Respuestas de formulario 3', spreadsheetId })
    console.log(res)
    var data = res.data.values

    var propertisLeghts = data[0].length
    console.log("-0",data[0])

    const itemsArray = []
    const Items = () => {
      for (let index = 1; index < data.length; index++) {
        let item = {};
        for (let iPropertis = 0; iPropertis < propertisLeghts; iPropertis++) {
          item[data[0][iPropertis]] = data[index][iPropertis];
          console.log("--ITEMS",data[index][iPropertis])
        }
        itemsArray.push(item);
      }
      return itemsArray
    }

    return Items()
  }

  async findByPhone(cel) {
    const DataArray = await this.find();
    console.log("1-",DataArray.length)
    console.log("1-",DataArray.length > 0)
    if (DataArray.length > 0) {
      console.log("2-","--")
      for (let index = 1; index < DataArray.length; index++) {
        console.log("3-",cel)
        console.log("4-",DataArray[index])
        if (DataArray[index]["Celular"] === cel) {
          console.log("5-",DataArray[index])

          return { data: DataArray[index], index }
        } else {
          return "Usuario No Encontrado"
        }
      }
    } else {
      return "Error DB"
    }
  }



  async create(data) {






    var dataArray = [fechaFormateada()]
    var name = dataArray.push(data.name)
    var cc = dataArray.push(data.cc)
    var city = dataArray.push(data.city)
    var cel1 = dataArray.push(data.cel1)
    var cel2 = dataArray.push(data.cel2)
    var address = dataArray.push(data.address)
    var neighborhood = dataArray.push(data.neighborhood)
    var trunk = dataArray.push(data.trunk)
    dataArray.push("")
    var email = dataArray.push(data.email)
    var timeTrunk = dataArray.push(data.timeTrunk)
    dataArray.push("")
    dataArray.push("")//var fullPayment = dataArray.push(data.fullPayment)
    dataArray.push("")//var proofOfPayment = dataArray.push(data.proofOfPayment)
    var bicycleCourier = dataArray.push(data.bicycleCourier)
    dataArray.push("")
    dataArray.push("")
    dataArray.push("")
    dataArray.push("")
    var nameOrNickname = dataArray.push(data.nameOrNickname)
    var InstagramUser = dataArray.push(data.InstagramUser)
    dataArray.push("")
    var generateGuide = dataArray.push(data.generateGuide)
    dataArray.push("")
    dataArray.push("")
    dataArray.push("")
    dataArray.push("")
    dataArray.push("")
    dataArray.push("")
    dataArray.push("")
    dataArray.push("")
    var state = dataArray.push(data.state)

    serviceSheets.postRows({ dataArray, spreadsheetId })
  }


  async UpdateByPhone({ cel, data }) {
    var { data,index } = await this.findByPhone(cel)
    var colum = "A"

    var dataArray = [
      `${fechaFormateada()}`,
      `${data.name}`,
      `${data.cc}`, 
      `${data.city}`,
      `${data.cel1}`,
      `${data.cel2}`,
      `${data.address}`,
      `${data.neighborhood}`,
      `${data.trunk}`,
      "",
      `${data.email}`,
      `${data.timeTrunk}`,
      `${data.bicycleCourier}`,
      `${data.nameOrNickname}`,
      `${data.InstagramUser}`,
      `${data.generateGuide}`,
      `${data.state}`,
    ]
      
    var row = index
    var range = `Hoja 5!${colum + row}:AG${row}`

    serviceSheets.patchData({ range, dataArray, spreadsheetId })
  }
}
module.exports = { CustomerService, DataCustumer };
/**
 *     {
        "Marca temporal": "",
        "Nombre completo": "",
        "Cédula": "",
        "Ciudad y Departamento": "",
        "Celular": "",
        "Celular secundario": "",
        "Dirección exacta": "",
        "Barrio / Indicaciones de entrega": "",
        "¿Deseas enviar tu prenda o dejarla en baúl?": "",
       / "Puntuación": "",
        "Dirección de correo electrónico": "",
        "¿Cuánto tiempo quieres guardarla?": "",
        /"Column M": "",
        /"¿Deseas pagar en su totalidad o parcial?": "",
        "Adjunta tu comprobante si ya hiciste el pago (puede ser un screenshot) 💾 \n\n*si me lo enviaste por Dm no tienes que volver a subirlo jeje": "",
    -"Enviar en bici": "",
       / "Column Q": "",
      /  "Puedes abonar desde el 50%\n¿Qué cantidad puedes abonar?": "",
       / "Adjunta tu comprobante si ya hiciste el pago (puede ser un screenshot) 💾": "",
        "Tu nombre o apodo 🍃": "",
        "@ o usuario de Instagram": "",
        "¿Cómo prefieres pagar el envío?": "",
        "Generar guia": "FALSE"
    }
 */