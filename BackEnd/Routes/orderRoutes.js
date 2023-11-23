const express= require('express')
const router = express.Router()

const{ getOrderbyId,getAllOrder,addNewOrder, deleteOrderById}=require('../Controllers/orderController')

//Get Request All and By ID
// router.route('/get/Users').get(getUsers)

router.route('/get/:id').get(getOrderbyId)
router.route('/get').get(getAllOrder)
router.route('/post').post(addNewOrder)
router.route('/delete/by/:id').delete(deleteOrderById)
module.exports= router;