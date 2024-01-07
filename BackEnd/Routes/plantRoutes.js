const express = require('express')
const multer = require('multer');
const connection = require('../Config/db')

const router = express.Router()

const { getPlantbyId, getAllPlants, deletePlantById ,getPantToEdit ,getPlantsbyCategory ,PlantsbyCategory} = require('../Controllers/plantController')

//Get Request All and By ID
// router.route('/get/Users').get(getUsers)

router.route('/get/:id').get(getPlantbyId)
router.route('/getcategory/:id').get(getPlantsbyCategory)
router.route('/categoryplants/:category').get(PlantsbyCategory)
router.route('/getplant/:id').get(getPantToEdit)
router.route('/get').get(getAllPlants)

router.route('/deleteby/:id').delete(deletePlantById)


// add data of plant
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/');
  },
  filename: (req, file, callback) => {
    callback(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

router.post('/post', upload.array('images', 5), (req, res) => {
  try {
    const query = 'INSERT INTO `plant`( `seller_id`,`name`, `price`, `stock`, `category`, `description`, `images`) VALUES (?,?,?,?,?,?,?);';

    // Value to be inserted 

    let seller_id = req.body.seller_id;
    let name = req.body.name;
    let price = req.body.price;
    let stock = req.body.stock;
    let category = req.body.category;
    let description = req.body.description;
    let images = req.files.map(file => file.filename).join(', ');
    // Creating queries 
    if (seller_id != null && name != null && price != null && stock != null && category != null && description != null && images != null) {


      connection.query(query, [seller_id, name, price, stock, category, description, images], (err, rows) => {
        if (!err) {
          res.json({
            status: true,
            message: "Data inserted into the Plants table",
          });
        } else {
          console.error(err);
          res.status(500).json({
            status: false,
            message: "Internal Server Error",
          });
        }
      });

    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
})

//// upadte the plant


router.put('/updatepalnt/:id', upload.array('images', 5), (req, res) => {

  try {

    const updateQuery = 'UPDATE `plant` SET  `name`=?, `price`=?, `stock`=?, `category`=?, `description`=?, `images`=? WHERE `id`=?';

    id=req.params.id
     
    let name = req.body.name;
    let price = req.body.price;
    let stock = req.body.stock;
    let category = req.body.category;
    let description = req.body.description;
    // let images = req.files.map(file => file.filename).join(', ');
    // let imagesold =req.body.imagesold;

    const fileNamesFromFiles = req.files.map(file => file.filename);

  // Get image names from req.body.imagesold (assuming it's a comma-separated string)
  const imageNamesFromOldImages = req.body.imagesold.split(',').map(image => image.trim());

  const mergedImages = [...fileNamesFromFiles, ...imageNamesFromOldImages];

  const mergedImagesString = mergedImages.join(', ');

   console.log(mergedImagesString) 


    
    if ( name != null && price != null && stock != null && category != null && description != null && mergedImagesString != null) {

      connection.query(updateQuery, [ name, price, stock, category, description, mergedImagesString, id], (err, rows) => {
        if (!err) {

          if (rows.affectedRows > 0) {
            res.status(200).json({
              status: false,
              message: "Product updated successfully",
            });

          } else {
            
            res.status(200).json({
              status: false,
              message: "Product with the specified ID not found",
            });
          }
        } else {
          console.error(err);

        }

      });

    }else{
      res.status(200).json({
        status: false,
        message: "product not found",
      });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
})




module.exports = router;