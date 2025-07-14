const { IgApiClient } = require('instagram-private-api');
const { confIns } = require('./../../config/config');

const ig = new IgApiClient();

async function login() {
  try {
    // basic login-procedure
    ig.state.generateDevice(confIns.instagramUser);
    //  ig.state.proxyUrl = process.env.IG_PROXY;

    //await ig.simulate.preLoginFlow();

    const status = await ig.account.login(
      confIns.instagramUser,
      confIns.instagramPassword
    );

      //process.nextTick(async () => await ig.simulate.postLoginFlow());

       console.log(status);
    return status;
  } catch (error) {
    console.log('Login Error --', error);
    return "Error Loging",error
  }
}

module.exports = { ig, login };
