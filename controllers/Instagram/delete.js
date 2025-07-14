const { ig, login } = require('./login');

async function deleteById({ mediaId }) {
  return new Promise(async (resolve, reject) => {
    try {
      await login();
      const result = await ig.media.delete({
        mediaId: await mediaId,
      });
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = deleteById;
