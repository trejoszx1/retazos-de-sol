const { google } = require('googleapis');

const auth = new google.auth.GoogleAuth({
  keyFile: 'credentials/googleCredentials.json',
  scopes: 'https://www.googleapis.com/auth/spreadsheets',
});

const client = async () => {
  // Create client instance for auth
  return await auth.getClient();
};

module.exports = { google, client, auth };
