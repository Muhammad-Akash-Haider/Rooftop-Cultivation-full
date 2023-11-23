const express= require('express')
const router = express.Router()

const{ getNurserybyId,getAllNursery,addNewNursery, deleteNurseryById}=require('../Controllers/nurseryController')

//Get Request All and By ID
// router.route('/get/Users').get(getUsers)

router.route('/get/nursery/:id').get(getNurserybyId)
router.route('/get/nurseries').get(getAllNursery)
router.route('/post/nursery').post(addNewNursery)
router.route('/delete/by/:id').delete(deleteNurseryById)
module.exports= router;