const { promises } = require('dns');
const fs = require('fs');
const { readdir, mkdir,readFile , existsSync, writeFile} = require('node:fs/promises');

//const buffer = new Buffer;

const readfile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
const readPath = (path) => {
  return new Promise((resolve, reject) => {
    readdir(path, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
const createPath = (path) => {
  return new Promise((resolve, reject) => {
    if(!fs.existsSync(path)){
    fs.writeFile(path, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })}else{
      reject('The file exist')
    }

  });
};


const listFiles = async (path) => {
  const files = await readdir(path);
  console.log(files);
  return files;
};


const createDir = async (path) => {
  return await mkdir(path)
    .then((dir) => {
      console.log(dir);
      return `${path}`;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};


module.exports = { readfile, readPath,createPath, createDir,  };

//createDir('./uploads/news')
