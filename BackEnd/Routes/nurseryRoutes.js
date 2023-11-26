const express = require('express')
const router = express.Router()
const multer = require('multer');
const connection = require('../Config/db')

const { getNurserybyId, getAllNursery, addNewNursery, deleteNurseryById } = require('../Controllers/nurseryController')

//Get Request All and By ID
// router.route('/get/Users').get(getUsers)

router.route('/get/nursery/:id').get(getNurserybyId)
router.route('/get/nurseries').get(getAllNursery)


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

router.post('/post/nursery', upload.array('images', 5), (req, res) => {
    try {
        const query = 'INSERT INTO `nursery`( `seller_id`,`business_name`, `business_location`, `description`, `gallery`) VALUES (?,?,?,?,?);';

        // Value to be inserted 

        let seller_id = req.body.seller_id;
        let business_name = req.body.business_name;
        let address = req.body.address;
        let description = req.body.description;
        let images = req.files.map(file => file.filename).join(', ');
        // Creating queries 

        if (seller_id != null && business_name != null && address != null && description != null && images != null ) {

            connection.query(query, [seller_id, business_name, address, description, images], (err, rows) => {
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
        } else {
            res.json({

                message: "some data missing",
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



router.route('/delete/by/:id').delete(deleteNurseryById)

module.exports = router;