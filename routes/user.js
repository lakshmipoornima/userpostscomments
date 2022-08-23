const express=require('express')
const router=express.Router()
const userController=require('../controller/user')


router.route('/create').post(userController.createUser)
router.route('/getAll').get(userController.getAllUsers)
router.route('/getUser/:uuid').get(userController.getUser)
router.route('/update/:uuid').put(userController.updateUser)
router.route('/delete/:uuid').delete(userController.deleteUser)

module.exports=router