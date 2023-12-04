const express= require('express')
const router = express.Router()

const{ AddProductToCart  ,CartItems, UpdateStock }=require('../Controllers/CartController')

router.route('/AddToCart').post(AddProductToCart)
router.route('/CartItems/:id').get(CartItems)
router.route('updateStock').post(UpdateStock)


module.exports= router;