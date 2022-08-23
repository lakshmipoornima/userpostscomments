const {User}=require('../models')

//post users
exports.createUser=async(req,res)=>{
    const {name,email,role}=req.body

    try{
        const user=await User.create({name,email,role})
        return res.json(user)
    }
    catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
}

//get users
exports.getAllUsers=async(req,res)=>{
    try{
        const users=await User.findAll()
        return res.json(users)
    }
    catch(err){
        console.log(err)
        return res.status(500).json({error:"Something went wrong.."})
    }
}
//get user  '/users/:uuid'
exports.getUser=async(req,res)=>{
    const uuid=req.params.uuid
    try{
        const user=await User.findOne({
            where:{uuid},
            include:'posts'
        })
        return res.json(user)
    }
    catch(err){
        console.log(err)
        return res.status(500).json({error:"Something went wrong.."})
    }
}

//delete user '/users/:uuid'
exports.deleteUser=async(req,res)=>{
    const uuid=req.params.uuid
    try{
        const user=await User.findOne({
            where:{uuid} 
        })
        await user.destroy()
        return res.json({msg:"User deleted!"})
    }
    catch(err){
        console.log(err)
        return res.status(500).json({error:"Something went wrong.."})
    }
}

//update user '/users/:uuid'
exports.updateUser= async(req,res)=>{
    const uuid=req.params.uuid
    const {name,email,role}=req.body
    try{
        const user=await User.findOne({
            where:{uuid}
        })
        user.name=name
        user.email=email
        user.role=role

        await user.save()
        return res.json(user)
    }
    catch(err){
        console.log(err)
        return res.status(500).json({error:"Something went wrong.."})
    }
}