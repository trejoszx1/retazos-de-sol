const InstagramAPI = require('../../controllers/Instagram/index');
const { readfile } = require('../../controllers/fs/fsUtil');
//const {pool} = require('./../libs/postgres')

//const igLocal = new InstagramAPI();

class InstagramServices extends InstagramAPI {
  constructor() {
    super();
  }
  async sendOne({ path, text }) {
    if (path === undefined) {
      return 'No file';
    } else {
      try {
        const buffer = await readfile(path);
        const result = await igLocal.postUserOne({ buffer, text });
        return result;
      } catch (error) {
        console.log('Error Class.service', error);
      }
    }
  }
  async sendAlbum({ arrayPath, text }) {
    if (arrayPath === undefined) {
      return 'No files';
    } else {
      console.log(arrayPath);
      try {
        return await Promise.all(
          arrayPath.map(async (path) => {
            const fileBuffer = await readfile(path);
            return { file: fileBuffer };
          })
        )
          //.then(x => console.log( x))
          .then(async (x) => await this.postUserAlbum({ items: x, text }))
          .then((x) => {
            return x;
          })
          .catch((e) => console.log('[ERROR]', e));
      } catch (error) {
        console.log('[]', error);
      }
    }
  }

  async viewIns() {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.getUserPosts();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }
  async deleteById({ mediaId }) {
    if (mediaId === undefined) {
      return error;
    } else {
      return new Promise(async (resolve, reject) => {
        try {
          const result = await super.deleteById({ mediaId });
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });
    }
  }
  async editMedia({ mediaId ,captionText}) {
    if (mediaId === undefined) {
      return error;
    } else {
      return new Promise(async (resolve, reject) => {
        try {
          const result = await super.editMedia({ mediaId ,captionText});
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });
    }
  }
}
module.exports = InstagramServices;
