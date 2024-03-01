const express= require('express')
const router = express.Router()
const multer = require('multer');
const connection = require('../Config/db')

const{ login, signup , }=require('../Controllers/userController')

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, 'uploads/');
    },
    filename: (req, file, callback) => {
      callback(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
    }
  });
  const upload = multer({ storage: storage });


router.route('/login').post(login)

router.route('/signup').post(signup)

router.post('/verifyprofile', upload.fields([{ name: 'idDocument', maxCount: 1 }, { name: 'addressProof', maxCount: 1 }]), (req, res) => {
    console.log(req.files); // Access uploaded files using req.files
    console.log(req.body); // req.body will be empty for files uploaded using multer
    res.send('Files uploaded successfully');
  });


module.exports= router;