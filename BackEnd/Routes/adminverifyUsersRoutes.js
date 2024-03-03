const express= require('express')
const router = express.Router()

const {GetVerifcaionDetils} = require('../Controllers/AdminVerifyUsersController')


router.route('/get').get(GetVerifcaionDetils);

module.exports= router;