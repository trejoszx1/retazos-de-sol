const express = require('express');

const instagramRouter = require('./instagram.router');
const postRouter = require('./post.router');
const notionRouter = require('./notion.router')
const collection = require('./collection.router.js')

const router = express.Router();


router.use('/public', postRouter);
router.use('/instagram', instagramRouter);
router.use('/notion', notionRouter)
router.use('/collection',collection)


router.get('/', async (req,res ,next) =>{
  res.json("Heyy admin")
})

module.exports = router;


