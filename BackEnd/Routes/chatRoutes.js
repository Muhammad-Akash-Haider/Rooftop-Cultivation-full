const express= require('express')
const router = express.Router()

const {savechat ,getchats} = require('../Controllers/chatController');

router.route('/savechat').post(savechat)
router.route('/getchats/:id').get(getchats)

module.exports= router;