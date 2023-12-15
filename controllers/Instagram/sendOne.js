const {ig,login} = require('./login')
//const mediaLocation = require('../location')

async function sendOne({file, text, mediaLocation}, callback){
    login()
    const result = await ig.publish.photo({
          file:  file,
          caption: await text,
//          location: mediaLocation,
    })
    callback(result)
}


module.exports = sendOne


