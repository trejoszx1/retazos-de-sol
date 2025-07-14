const GoogleSheets = require('../../services/admin/googleapis.service');
const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const { readfile } = require('../fs/fsUtil');
const { options } = require('joi');
const { search } = require('@notionhq/client/build/src/api-endpoints');
const svgPath = './assets/svg/shipping/pageSendings.svg';
const shippingPay = './assets/svg/shipping/EnvioPago.svg';



const { ConfGoogle } = require('../../config/config');


const spreadsheetId = ConfGoogle.spreadsheetId;

const dataJson = async () => {
  const service = new GoogleSheets();

  const rows = (await service.getRows({ range: 'Respuestas de formulario 3', spreadsheetId })).data.values;

  const totalColums = rows.length;

  const data = [];

  for (let index = 1; index < totalColums; index++) {
    const row = rows[index];
    console.log("---------",row[22])
    if (row[24] != 'FALSE' && row[6] != undefined ) {
      const dataFormat = {
        loacalONacional:row[19],
        id: index + 1,
        metododeenvio: row[16],
        nombre: row[1],
        ciudad: row[3],
        direccion: '\r' + row[6],
        barrio: row[7],
        cc: row[2],
        cel: row[4],
        cel2: row[5],
        envio: (() => {
          if (row[13] == 'Total + Envio' || row[22] == 'Anticipados, asegúrate de enviarme el comprobante e incluir la tarifa de envío.') {
            return '¡ENVIO PAGO!';
          }else if(row[22] == 'Contraentrega, al recibir tu paquete'){
            return '¡AL COBRO!'
          } 
          else {
            return '';
          }
        })(),
      };
      data.push(dataFormat);
    }
  }
  return data;
};


const generatePdf = async () => {
  const svg = await readfile(svgPath);
  const namePath = `./Guias/${Date.now()}-Guia-De-Envio.pdf` // './outputnew.pdf';

  const puppeteerPDF = async () => {



    // Puputer init

    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    
    const dataForm = await dataJson();
    const guieForPage = 14;
    var numberOfPages = 0

    const initialNumber = 0


    numberOfPages = Math.ceil(dataForm.length / guieForPage)  // Number of pages
    //numberOfPages = 1

    //cheerio init
    //console.log("Paginas",numberOfPages)
    //console.log("Datos totales",dataForm.length)
    var svgdata = []


    for (let index = 0; index < numberOfPages; index++) {
      console.log(index)
      svgdata.push(svg)
    }
    //console.log(svgdata)
    allBufferSvg = Buffer.concat([...svgdata])


    var $ = cheerio.load(allBufferSvg, {
      xmlMode: true,
    });



    var idexElement = 0
    //var idexElement =14
    for (let idxPage = 0; idxPage < numberOfPages; idxPage++) {

      console.log("i", idxPage)
      //create PAGE



      for (let index = 1; index < guieForPage + 1; index++) {
        //const element = dataForm[initialNumber  - 1];
        // Get Array by Element in Exel Form 

        const element = dataForm[idexElement]
        //console.log( "Elemento de Exel",idexElement)
        const interval = 15; // data.length +1 //15
        //const interval = dataForm.length
        //console.log("Number Page",idxPage)
        //console.log("Number item", index)
        //if (index < guieForPage) {

        console.log("data", `text:contains('x${index}.id')`, -idxPage, `${element?.id ? element?.id : ''}`)
/*
        console.log(element?.envio == 'Anticipados, asegúrate de enviarme el comprobante e incluir la tarifa de envío.'  ? 'Envio Pago' : 
          element?.envio == 'Contraentrega, al recibir tu paquete'? 'Cobro':'')
*/
        console.log(element?.envio)

        $(`text:contains('x${index}.id')`).eq(-idxPage).text(
          `${element?.id ? element?.id : ''}`);
        $(`text:contains('x${index}.metododeenvio')`).eq(-idxPage).text(
          `${element?.metododeenvio ? element?.metododeenvio : ''}`
        );
        $(`text:contains('x${index}.nombre')`).eq(-idxPage).text(
          `${element?.nombre ? element?.nombre : ''}`
        );
        $(`text:contains('x${index}.ciudad')`).eq(-idxPage).text(
          `${element?.ciudad ? element?.ciudad : ''}`
        );
        $(`text:contains('x${index}.direccion')`).eq(-idxPage).text(
          `${element?.direccion ? element?.direccion : ''}`
        );
        $(`text:contains('x${index}.barrio')`).eq(-idxPage).text(
          `${element?.barrio ? element?.barrio : ''}`
        );
        $(`text:contains('x${index}.cc')`).eq(-idxPage).text(
          `${element?.cc ? element?.cc : ''}`
        );

        $(`text:contains('x${index}.cel2')`).eq(-idxPage).text(
          `${element?.cel2 ? element?.cel2 : ''}`
        );

        $(`text:contains('x${index}.cel')`).eq(-idxPage).text(
          `${element?.cel ? element?.cel : ''}`
        );

        $(`text:contains('x${index}.envio')`).eq(-idxPage).text(`${ element?.envio ? element?.envio : "" 
          /*
          element?.envio == 'Anticipados, asegúrate de enviarme el comprobante e incluir la tarifa de envío.'  ? 'Envio Pago' : 
          element?.envio == 'Contraentrega, al recibir tu paquete'? 'Cobro':''
          */  
          }
              `
        );
        //console.log('Index', index);
        // } 
        idexElement++ //= idexElement + 1
        //numberOfPages = numberOfPages++
      }

    }
    await page.setContent(`${$.xml()}`);





    //const base64Data = svg.replace(/^data:image\/svg\+xml;base64,/, '');
    //const svgBase64 = file;
    //const svgText = Buffer.from(svgBase64, 'base64').toString('utf-8');
    //console.log('.......', svgText);

    // Crear el PDF a partir del SVG

    await page.emulateMediaType('screen');

    //global.ReadableStream = import('web-streams-polyfill').ReadableStream;
    const pageN = 2;
    const totalPages = 2;

    const pages = await page.pdf({
      //headerTemplate: `<div style='text-align: center; font-size: 12px; margin-top: 10px'>Page <span class='pageNumber'>${pageN}</span> of <span class='totalPages'>${totalPages}</span></div>`,

      path: namePath,
      format: 'letter',
      //footerTemplate: 'ajkbsd',
      margin: { top: 0, bottom: 0 },
      //headerTemplate: {totalPages:'2'}
    });

    await browser.close();
    return {pages, namePath};
  };
  
  
  return  puppeteerPDF();

};

//generatePdf()
module.exports = generatePdf;
//