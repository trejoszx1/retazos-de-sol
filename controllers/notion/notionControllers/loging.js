const { Client } = require('@notionhq/client');


const {confNot} = require('./../../../config/config')



const notion = new Client({ auth: confNot.notionK });


module.exports = notion
