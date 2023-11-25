const express = require('express')


const connection = require('../Config/db')
const bcrypt = require('bcrypt');
const saltRounds = 10;





// This is Register/Signup API

exports.signup = async (req, res) => {
  const bodypassword = req.body.password;
  const encryptedPassword = await bcrypt.hash(bodypassword, saltRounds)


  const query = 'INSERT INTO `users`(`id`, `First_name`, `last_name`, `email`, `password`, `user_type`, `city`,`phone`) VALUES (?,?,?,?,?,?,?,?);';


  // Value to be inserted 

  let id = req.body.id;
  let First_name = req.body.First_name;
  let last_name = req.body.last_name;
  let password = encryptedPassword;
  let email = req.body.email;
  let user_type = req.body.user_type;
  let city = req.body.city;
  let phone = req.body.phone;



  // Value to be inserted 

  // Creating queries 
  if (First_name != null && last_name != null && email != null && password != null && user_type != null && city != null && phone != null) {
    connection.query(query, [id, First_name, last_name, email, password, user_type, city, phone], (err, rows) => {
      if (!err) {
        res.json({
          status: true,
          Message: "Wellcome!!!........Your Successsfully signUp"
        })
      }

      else
        console.log(err);

    });
  } else {
    res.json({
      status: false,
      Message: "some data is missing"
    })
  }

}







exports.login = async (req, res) => {


  const email = req.body.email;
  const password = req.body.password;

  var hash = bcrypt.hashSync(password, saltRounds);


  if (email && password) {
    connection.query('SELECT password FROM users WHERE email = ?', [email],
      (error, row, fields) => {
        if (bcrypt.compareSync(password, hash)) {
          res.json({
            status: true,
            Message: "Wellcome.**********SYou are Successfully login"
          });
        } else {
          res.send('Incorrect Email and/or Password!');
        }
        res.end();
      });
  } else {
    res.send('Please enter Username and Password!');
    res.end();
  }




}