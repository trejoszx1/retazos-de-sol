const sendOne = require('./sendOne');
const sendAlbum = require('./sendAlbum');
const feedUser = require('./feedUser.js');
const deleteById = require('./delete');
const editMedia = require('./editMedia.js')

const { ig, login } = require('./login');

class InstagramAPI {
  constructor() {}
  async postUserAlbum({ items, text }) {
    await login();
    return new Promise(async (resolve, reject) => {
      try {
        console.log(text, items);
        const result = await sendAlbum({ text, items });
        resolve(result);
      } catch (error) {
        reject(error);
      }
      //
      //const result = sendAlbum({ text, items }, (data, err) => {
      //  if (err) {
      //    reject(err);
      //  } else {
      //    resolve(data);
      //  }
      //});
      //return result;
    });
  }
  async postUserOne({ buffer, text }) {
    await login();
    return new Promise((resolve, reject) => {
      const result = sendOne(
        {
          file: buffer,
          text: text,
        },
        (data, err) => {
          if (err) {
            reject(err);
          } else {
            console.log('this data --', data);
            resolve(data);
          }
        }
      );

      return result;
    });
  }

  async getUserPosts() {
    await login();
    return new Promise((resolve, reject) => {
      try {
        feedUser().then((x) => resolve(x));
      } catch (error) {
        reject(error);
      }
    });
  }
  async deleteById({ mediaId }) {
    return new Promise((resolve, reject) => {
      try {
        const result = deleteById({ mediaId });
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }
  async editMedia({ mediaId,captionText }) {
    return new Promise((resolve, reject) => {
      try {
        const result = editMedia({ mediaId,captionText });
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }
  searchPostsByTag(tag) {}
}

module.exports = InstagramAPI;
