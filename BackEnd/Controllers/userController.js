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
  const { email, password } = req.body;

  if (email && password) {
    try {
      // Adjust your query to also select user_id and user_type
      const query = 'SELECT *  FROM users WHERE email = ?';
      connection.query(query, [email], async (error, results, fields) => {
        if (error) {
          res.status(500).send('Server error');
          return;
        }

        if (results.length > 0) {
          // Compare the password with the hashed password in the database
          const match = await bcrypt.compare(password, results[0].password);
          if (match) {
            res.json({
              status: true,
              message: "Welcome. You are successfully logged in.",

              user_id: results[0].id,    // Send user_id
              user_type: results[0].user_type ,// Send user_type
              user_name : results[0].First_name +' '+results[0].last_name,
            });
          } else {
            res.send('Incorrect Email and/or Password!');
          }
        } else {
          res.send('Incorrect Email and/or Password!');
        }
      });
    } catch (err) {
      res.status(500).send('Server error');
    }
  } else {
    res.send('Please enter Email and Password!');
  }
};
