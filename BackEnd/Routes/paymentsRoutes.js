const express= require('express')
const router = express.Router()

const{ paymenthistory ,getpaymentsbyId,Makepayment,handleWebhook}=require('../Controllers/paymentsController')

//Get Request All and By ID
// router.route('/get/Users').get(getUsers)


router.route('/saveorder/:session_id').get(handleWebhook)
router.route('/Makepayment').post(Makepayment)
router.route('/get').get(paymenthistory)
router.route('/get/:id').get(getpaymentsbyId)

module.exports= router;