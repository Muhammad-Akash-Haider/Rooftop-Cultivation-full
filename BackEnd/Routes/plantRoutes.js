const express= require('express')
const multer = require('multer');
const connection = require('../Config/db')

const router = express.Router()

const{ getPlantbyId,getAllPlants, deletePlantById}=require('../Controllers/plantController')

//Get Request All and By ID
// router.route('/get/Users').get(getUsers)

router.route('/get/:id').get(getPlantbyId)
router.route('/get').get(getAllPlants)

router.route('/delete/by/:id').delete(deletePlantById)


// Configure storage for multer
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
        const query = 'INSERT INTO `plant`( `buyer_id`,`name`, `price`, `stock`, `category`, `description`, `images`) VALUES (?,?,?,?,?,?,?);';
  
        // Value to be inserted 
      
        let buyer_id = req.body.buyer_id;
        let name = req.body.name;
        let price = req.body.price;
        let stock = req.body.stock;
        let category = req.body.category;
        let description = req.body.description;
        let images = req.files.map(file => file.filename).join(', ');
        // Creating queries 
  
        connection.query(query, [buyer_id, name, price, stock, category, description, images], (err, rows) => {
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
      } catch (error) {
        console.error(error);
        res.status(500).json({
          status: false,
          message: "Internal Server Error",
        });
      }
})

module.exports= router;