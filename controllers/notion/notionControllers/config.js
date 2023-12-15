

const { Client } = require('@notionhq/client');



require("dotenv").config({ path: ".env" });


class Config{
  constructor({
    database_products,
    database_user,
    auth,

  }){
    this.database_products = process.env.NOTION_DATABASE_ID
  }
}
const token = process.env.NOTION_TOKEN  

const notion = new Client({ auth: token });

const database_id_user   = process.env.NOTION_DATABASE_ID_USERS



module.exports = { Client, notion , database_id_user, token};
