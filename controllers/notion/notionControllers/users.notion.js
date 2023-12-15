const { database_id_user ,notion} = require('./config');


    async  function getUsers() {
      const notionPages = await notion.databases.query({ database_id: database_id_user });


      const data  = await notionPages.results.map(x => x.properties.Name);


      console.log(data);
      return notionPages}



async function getUserProperties(){
  const response = await notion.databases.retrieve({
          database_id: database_id_user,
  })
  const propertiesS = response.properties
  //const obj = JSON.parse(propertiesS );

  console.log(propertiesS)
}






module.exports =  { getUserProperties , getUsers}
