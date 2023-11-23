const express= require('express')
const router = express.Router()

const{ getPlantbyId,getAllPlants,addNewPlant, deletePlantById}=require('../Controllers/plantController')

//Get Request All and By ID
// router.route('/get/Users').get(getUsers)

router.route('/get/:id').get(getPlantbyId)
router.route('/get').get(getAllPlants)
router.route('/post').post(addNewPlant)
router.route('/delete/by/:id').delete(deletePlantById)
module.exports= router;