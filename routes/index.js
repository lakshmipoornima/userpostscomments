const express=require('express')
const router=express.Router()
const userRoutes=require('./user')
const commentRoutes=require('./comment')
const postRoutes=require('./post')

router.use('/user',userRoutes)
router.use('/comments',commentRoutes)
router.use('/posts',postRoutes)


module.exports=router

