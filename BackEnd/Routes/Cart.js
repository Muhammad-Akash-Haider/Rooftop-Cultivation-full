const express= require('express')
const router = express.Router()

const{ AddProductToCart  ,CartItems }=require('../Controllers/CartController')

router.route('/AddToCart').post(AddProductToCart)
router.route('/CartItems/:id').get(CartItems)



module.exports= router;