const { google, client, auth } = require('./../auth');

const googleSheets = google.sheets({ version: 'v4', auth: client });

class GoogleSheets {
  getRows = async ({ range, spreadsheetId }) => {
    return await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range,
    });
  };
  metaData = async ({spreadsheetId}) => {
    return await googleSheets.spreadsheets.get({
      auth,
      spreadsheetId,
    });
  };
  postRows = async ({dataArray,spreadsheetId}) => {
    console.log(dataArray.length)

    return await googleSheets.spreadsheets.values.append({
      auth,
      spreadsheetId,
      range: 'Hoja 5',
      valueInputOption: 'USER_ENTERED',
      insertDataOption:'INSERT_ROWS',
      resource: {
        values: [dataArray],
      },
    });
  };
  patchData = async ({range,dataArray,spreadsheetId}) =>{
    return await googleSheets.spreadsheets.values.update({
      auth,
      spreadsheetId,
      range: range,//'Hoja 5!A6:AG6',
      valueInputOption: 'USER_ENTERED',
      resource: {
        range:range,//"Hoja 5!A6:AG6",
        majorDimension:"ROWS" ,
        values: [dataArray],
      },
    });
  };
  getByDataFilter = async ({ range, spreadsheetId })=>{
    // {
    //   "dataFilters": [
    //     {
    //       "a1Range": "Sheet1!A1:C10"
    //     },
    //     {
    //       "developerMetadataLookup": {
    //         "metadataKey": "exampleKey"
    //       }
    //     }
    //   ],
    //   "majorDimension": "ROWS",
    //   "valueRenderOption": "FORMATTED_VALUE",
    //   "dateTimeRenderOption": "SERIAL_NUMBER"
    // }
    

      return await googleSheets.spreadsheets.values.batchGetByDataFilter({
        "dataFilters": [
          {
            
          }
        ],
        //"majorDimension": enum (Dimension),
        //"valueRenderOption": enum (ValueRenderOption),
        //"dateTimeRenderOption": enum (DateTimeRenderOption)
      });
  }
}

module.exports = GoogleSheets;
