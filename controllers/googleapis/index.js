const GoogleSheets = require('./googleSheets/');

const { ConfGoogle } = require('../../config/config');


const spreadsheetId = ConfGoogle.spreadsheetId;


class GoogleApisController extends GoogleSheets {
  constructor() {
    super();
  }

  // GoogleSheets() {

  //   return this.getRows({ range: 'Respuestas de formulario 3', spreadsheetId });
  
  //   }
    

  }


module.exports = { GoogleApisController };
