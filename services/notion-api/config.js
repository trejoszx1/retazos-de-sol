require("dotenv").config();

class Config{
  constructor({
    database_products,
    database_user,
    auth,

  }){
    this.database_products = process.env.NOTION_DATABASE_ID
  }
}




module.exports = Config;
