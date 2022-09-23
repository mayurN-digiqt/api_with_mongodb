const express = require('express')
const Blog = require('../models/blog'); 
const blogController = require('../controller/blogcontroller')  
const router = express.Router()
// app.use((req,res,next)=>{
//     console.log('New Request')
//     console.log('host:',req.hostname)
//     console.log('path',req.path)
//     console.log('method',req.method)
//     next()
// })

// Blog Routes
router.get('/', blogController.blog_index);     

router.post('/', blogController.blog_create_post)

router.get('/create',blogController.blog_create_get)

router.get('/:id', blogController.blog_details)

router.delete('/:id',blogController.blog_delete)

module.exports = router;