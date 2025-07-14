const { promises } = require('dns');
const fs = require('fs');
const { readdir, mkdir,readFile , existsSync, writeFile ,rmdir } = require('node:fs/promises');

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
        console.log('DATA',data)
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


const removeDir = async (path)=>{
  return await rmdir(path)
  .then((dir) => {
    console.log(dir);
    return `${path}`;
  })
  .catch((error) => {
    console.log(error);
    return error;
  });
}


module.exports = { readfile, listFiles,createPath, createDir,removeDir  };

//createDir('./uploads/news')
