const { ig, login } = require('./login');

async function deleteById({ mediaId, captionText }) {
  return new Promise(async (resolve, reject) => {
    try {
      await login();
      const result = await ig.media.editMedia({
        mediaId: await mediaId,
        captionText: captionText
      });
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = deleteById;
