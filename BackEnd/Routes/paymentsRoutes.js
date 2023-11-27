const express= require('express')
const router = express.Router()

const{ paymenthistory }=require('../Controllers/paymentsController')

//Get Request All and By ID
// router.route('/get/Users').get(getUsers)


router.route('/get').get(paymenthistory)

module.exports= router;