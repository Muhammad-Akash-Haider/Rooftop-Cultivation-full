const express= require('express')
const router = express.Router()
const multer = require('multer');
const connection = require('../Config/db')

const{ login, signup ,profileverify }=require('../Controllers/userController')

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

router.post('/verifyprofile', upload.fields([{ name: 'idDocument', maxCount: 1 }, { name: 'addressProof', maxCount: 1 }]), profileverify);

module.exports= router;