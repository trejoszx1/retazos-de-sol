const express = require('express');

const instagramRouter = require('./instagram.router');
const postRouter = require('./post.router');
const notionRouter = require('./notion.router')





const router = express.Router();


router.use('/public', postRouter);
router.use('/instagram', instagramRouter);
router.use('/notion', notionRouter)



router.get('/', async (req,res ,next) =>{
  res.json("Heyy admin")
})

module.exports = router;


