const boom = require('@hapi/boom');
const { config } = require('./../config/config');
const { func } = require('joi');

function checkApiKey(req, res, next) {
  const apikey = req.headers['api'];
  if (apikey == config.apiKey) {
    next();
  } else {
    next(boom.unauthorized());
  }
}
function checkRoles(...roles) {
  return (req, res, next) => {
    const user = req.user;
    if (roles.includes(user.role)) {
      next();
    } else {
      next(boom.unauthorized);
    }
  };
}

module.exports = { checkApiKey, checkRoles };
