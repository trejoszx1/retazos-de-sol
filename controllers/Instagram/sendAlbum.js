const {ig,login} = require('./login')
//const mediaLocation = require('../location')

async function sendAlbum({items, text, mediaLocation}, callback){
    login()
    const result = await ig.publish.album({
          items:  items,
          caption: text,
//          location: mediaLocation,
    })
    //callback(result)

    console.log(result)
    return result

}


module.exports = sendAlbum


