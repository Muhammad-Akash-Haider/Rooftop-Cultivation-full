const express= require('express')
const router = express.Router()

const{ login, signup}=require('../Controllers/userController')


router.route('/login').post(login)

router.route('/signup').post(signup)

// Service Provider LogOut
// router.route('/logOut').post(logOut)

module.exports= router;