const express= require('express')
const router = express.Router()

const{ AddProductToCart  ,CartItems, UpdateStock ,DowngradeStock,deletecartById}=require('../Controllers/CartController')

router.route('/AddToCart').post(AddProductToCart)
router.route('/CartItems/:id').get(CartItems)
router.route('/updateStock').post(UpdateStock)
router.route('/Downgrade').post(DowngradeStock)
router.route('/deletecartitem/:id').delete(deletecartById)


module.exports= router;