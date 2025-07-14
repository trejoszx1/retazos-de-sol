const {Strategy} = require("passport-local");
const bcrypt = require('bcrypt')
const AuthService = require("../../../services/auth.service");
const boom = require("@hapi/boom");

const service = new AuthService()

const LocalStrategy = new Strategy( {
  usernameField: 'email',
  passwordField: 'password'

},
async (username, password, done)=>{
  const email = username
  try {
    const user = await service.getUser(email, password)
    done(null,user)
  } catch (error) {
    done(error, false)
  }
});


module.exports= LocalStrategy
