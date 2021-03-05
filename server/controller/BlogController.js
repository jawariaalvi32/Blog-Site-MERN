const express = require('express')
const Post = require('../models/posts')
const router = express.Router()

router.get('/', async (req, res) => {
    // get posts from posts
    try {
        const posts = await Post.find();
        console.log(posts);
        res.status(200).json({ success: true, data: posts });
      } 
      catch (e) {
        res.status(404).json({ success: false, error: e.message });
      }
    });
    // try {
    //     const posts = await Post.find();
    //     res.json({
    //         success: true,
    //         status: 200, //ok
    //         data: posts
    //     })
    // } catch (error) {
    //     res.json({
    //         success: false,
    //         status: 400,
    //         error: error
    //     })
    // }

// })
router.post('/add', async (req, res) => {
    console.log(".......", req.body)
    try {
        const post = await Post.create(req.body)
        res.json({
            success: true,
            status: 201,
            dbid: post._id
        })

    } catch (error) {
        res.json({
            success: false,
            status: 400,
            error : error.message
            
        })

    }


})
router.get('/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.json({
        success: true,
        status: 200, //ok
        data: post
    })

})
router.put('/:id', async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, { title: req.body.title, description: req.body.des});
   res.json({
       success: true,
       status: 200, //ok
       msg: 'post is updated successfully'
   })
  
   } catch (error) {
       console.log(error)
   }

})
router.delete('/:id', async (req, res) => {
    try {
         const post = await Post.findByIdAndDelete(req.params.id);
    res.json({
        success: true,
        status: 200, //ok
        msg: 'post is deleted successfully'
    })
   
    } catch (error) {
        console.log(error)
    }

})
module.exports = router
