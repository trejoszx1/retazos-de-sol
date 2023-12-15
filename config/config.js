require('dotenv').config();


const config = {
  env: process.env.NODE_ENV || 'dev',
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
}
const confIns = {
  instagramUser : process.env.INSTAGRAM_USERNAME,
  instagramPassword : process.env.INSTAGRAM_PASSWORD,
}
const confNot = {
  notionK: process.env.NOTION_TOKEN,


  databaseIdProducts: process.env.NOTION_DATABASE_ID_PRODUCT_DEV,
  databaseIdPostInstagram: process.env.NOTION_DATABASE_ID_POST_INSTAGRAM,



}


module.exports = {config ,confIns,confNot}
