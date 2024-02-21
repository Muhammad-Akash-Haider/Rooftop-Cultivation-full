const express= require('express')
const router = express.Router()

const{ paymenthistory ,getpaymentsbyId,Makepayment,saveorder,refundPayment}=require('../Controllers/paymentsController')

//Get Request All and By ID
// router.route('/get/Users').get(getUsers)


router.route('/saveorder/:session_id/:id').get(saveorder)
router.route('/refund').post(refundPayment)
router.route('/Makepayment/:id').post(Makepayment)
router.route('/get').get(paymenthistory)
router.route('/get/:id').get(getpaymentsbyId)

module.exports= router;