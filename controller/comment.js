const {User,Post,Comment}=require('../models')

exports.createComment=async(req,res)=>{
    const {userUuid,postUuid,comments}=req.body
    try{
        const user=await User.findOne({where:{uuid:userUuid}})

        const post=await Post.findOne({where:{uuid:postUuid}})

        const comment=await Comment.create({comments,userId:user.id,postId:post.id})
        return res.json(comment)
       
    }
    catch(err){
         console.log(err)   
         return res.status(500).json(err)
    }
}

exports.getAllComments=async(req,res)=>{
    
    try{
       
        const comments=await Comment.findAll({include:['post','user']})
        return res.json(comments)  
    }
    catch(err){
         console.log(err)   
         return res.status(500).json(err)
    }
}