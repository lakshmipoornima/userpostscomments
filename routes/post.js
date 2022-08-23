const express=require('express')
const router=express.Router()

const postController=require('../controller/post')

router.route('/create').post(postController.createPost)
router.route('/getAll').get(postController.getAllPosts)

module.exports=router