const express=require('express')
const router=express.Router()
const commentController=require('../controller/comment')

router.route('/create').post(commentController.createComment)
router.route('/getAll').get(commentController.getAllComments)

module.exports=router