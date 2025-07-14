const express = require('express');

const InstagramServices = require('./../../services/admin/instagram.services');
const controller = require('../../controllers/upload');
const router = express.Router();

const IService = new InstagramServices();

//const pool = require('./../libs/postgres')
router.get('/', async (req, res, next) => {
  const result = await  IService.viewIns()
  res.status(201).json(result)
  //console.log(await result)

});

router.post('/', async (req, res, next) => {
  try {
    res.send.json('...');
  } catch (error) {
    next(error);
  }
});

router.delete('/:id',async (req,res,next)=>{
  try {
    const {id} = req.params//

    const result = await IService.deleteById({mediaId: id})
    //console.log(id, req.body)
    res.status(201).json(result)
  } catch (error) {
    next(error)
  }
})

router.patch('/:id',async (req,res,next)=>{
  try {
    const {id} = req.params//
    const text = req.body.text
    const result = await IService.editMedia({mediaId: id, captionText: text})
    res.status(201).json(result)
  } catch (error) {
    next(error)
  }
})
router.post('/sendone', controller.upload, async (req, res, next) => {
  console.log(req);
  try {
    const path = req.file.path;
    const text = req.body.text;
    const result = await IService.sendOne({ path: await path, text: text });
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

router.post('/sendalbum', controller.uploads, async (req, res, next) => {
  try {
    const files = req.files;
    const searchPaths = files.map((item) => item.path);
    const text = req.body.text;
    const result = await IService.sendAlbum({
      arrayPath: searchPaths,
      text: text,
    });
    res.status(201).json(result);
  } catch (error) {
    next(error);
    console.log('[Error]', error);
  }
});

module.exports = router;
