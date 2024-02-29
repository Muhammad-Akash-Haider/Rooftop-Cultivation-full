const express= require('express')
const router = express.Router()

const{ getOrderbyId,getAllOrder,addNewOrder, deleteOrderById,getAllreturnsByid,updteOrderStatus, getOrderbyIdseller }=require('../Controllers/orderController')

//Get Request All and By ID
// router.route('/get/Users').get(getUsers)

router.route('/sellerorders/:id').get(getOrderbyIdseller)
router.route('/get/:id').get(getOrderbyId)
router.route('/get').get(getAllOrder)
router.route('/returns/:id').get(getAllreturnsByid)
router.route('/post').post(addNewOrder)
router.route('/delete/by/:id').delete(deleteOrderById)
router.route('/updateStatus/:id').put(updteOrderStatus)



module.exports= router;