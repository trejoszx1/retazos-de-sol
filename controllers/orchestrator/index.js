const NotionServices = require('./../../services/admin/notion.services'); // Reemplaza con el módulo real de Notion

const notionServices = new NotionServices({ tipeDB: 'PostInsta' });

var arrayOb = [];

// Tu función para validar y ejecutar
async function validarYEjecutar(objeto) {
  // Validación: "Listo para publicar" debe ser true y "start" debe ser igual o posterior a la hora actual
  const fechaActual = new Date().getMinutes();



  objeto.forEach((element) => {


    const dateSet = new Date(element.date?.start).getMinutes()
    console.log(dateSet)
    if (
      dateSet == fechaActual &&
      element.checkbox == true &&
      element.text !== undefined &&
      element.paths !== undefined &&
      element.checkbox2 == false
    ) {
      console.log('-------NOW--------', element.id);






      const body = {
        checkbox: [
          { id: 'Publicado' /*'i%3BuW'*/, bool: true },
          { id: 'Check', bool: true },
        ],
      };

      notionServices.updateInDatabase({ page_id: element.id, body });
    }
  });

  let arrayObjets = [];

  const result1 = () => {
    //return objeto.properties.Date
    //  if ( objeto.properties.Date.date != null) {
    //  return objeto.properties.Date.date.start
    //}
    //else {
    //  return false
    //}
  };

  //const verifyChecbox =objeto.properties["Listo para publicar"].checkbox
  //  /*
  //.filter(item => {if (item.date !== null) {
  //  return item.date
  //}
  //})
  //*/
  //
  //console.log("Result 1",result1())
  //
  //
  //const time = new Date()
  //const timeUTC = time.toISOString();
  //
  //  console.log(fechaActual,"---",time);
  //
  //  if (
  //    verifyChecbox && time == fechaActual
  //  ) {
  //    // Ejecutar la función con los parámetros del objeto
  //    // Por ejemplo, aquí simplemente imprimimos los detalles del objeto
  //    console.log('Ejecutando función con parámetros:' , objeto);
  //  }
}

const arrayPost = async () => {
  const result = await notionServices.viewDatabases();

  // Guarda los resultados en una variable global para que puedan ser accedidos por el setInterval
  global.resultadosNotion = result.results;
};

async function iniciarValidacionEnTiempoReal() {
  // Establece un intervalo para realizar la validación en tiempo real cada cierto tiempo (por ejemplo, cada 5 segundos)
  const interval = 5000; // 5000 milisegundos = 5 segundos

  //Example
  //  setInterval(async () => {
  //    arrayPost()
  //    if (global.resultadosNotion) {
  //      global.resultadosNotion.forEach((objeto) => {
  //        validarYEjecutar(objeto);
  //      });
  //    }
  //  }, interval);

  setInterval(async () => {
    await arrayPost();
    const result = await global.resultadosNotion.map((item) => ({
      id: item.id,
      date: item.properties.Date.date,
      checkbox: item.properties['Listo para publicar'].checkbox,
      checkbox2: item.properties.Publicado.checkbox,
      paths: item.properties.Paths.rich_text[0]?.plain_text,
      text: item.properties['texto para publicacion'].rich_text[0]?.plain_text,
    }));

    validarYEjecutar(result);

    // console.log('Set interval', global.resultadosNotion);
  }, interval);
}

require("../../services/admin/publications/publishing.service")

//iniciarValidacionEnTiempoReal();

module.exports;
