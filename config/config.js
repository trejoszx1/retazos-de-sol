require('dotenv').config();


const config = {
  env: process.env.NODE_ENV || 'dev',
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  pathOfFiles: process.env.PATH_OF_FILES || './uploads',
  apiKey: process.env.API_KEY,
  jwtSecret: process.env.JWT_SECRET,
  gmailAppKey: process.env.GMAIL_SMTP_PASSWORD,
  mail: process.env.MAIL,
  gmail: process.env.GMAIL,

}
const confIns = {
  instagramUser : process.env.INSTAGRAM_USERNAME,
  instagramPassword : process.env.INSTAGRAM_PASSWORD,
}
const confNot = {
  notionK: process.env.NOTION_TOKEN,
  //databaseIdProducts: process.env.NOTION_DATABASE_ID_PRODUCT_DEV,
  databaseIdProducts: process.env.NOTION_DATABASE_ID_PRODUCT,
  databaseIdPostInstagram: process.env.NOTION_DATABASE_ID_POST_INSTAGRAM,

}

const ConfGoogle= {
  spreadsheetId: process.env.SPREADSHEETID


}

module.exports = {config ,confIns,confNot, ConfGoogle}
