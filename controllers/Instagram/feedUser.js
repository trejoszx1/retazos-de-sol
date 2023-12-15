const { ig, login } = require('./login');
//const mediaLocation = require('../location')

async function feedUser() {
  return new Promise(async (resolve, reject) => {
    try {
      const loggedInUser = await login();
      //process.nextTick(
        
      //async () => await ig.simulate.postLoginFlow();

      const userFeed = ig.feed.user(loggedInUser.pk);

      const myPostsFirstPage = await userFeed.items();

      //await ig.simulate.preLoginFlow();

      resolve(myPostsFirstPage);
    } catch (error) {
      //console.log(error);
      reject(error);
    }
  });

}

module.exports = feedUser;
