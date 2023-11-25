const express = require('express')

const connection = require('../Config/db')




// Get Nursery by Id

exports.getNurserybyId = async (req, res) => {
    console.log(req.params.id)


    connection.query('SELECT * FROM nursery WHERE id = ' + req.params.id, (err, rows, fields) => {
        if (!err) {
            res.json({
                rows,
                status: true,
                Message: "Get Nursery by id"
            })
        }

        else
            console.log(err);
    })
}


//  Get All Nursey
exports.getAllNursery = async (req, res) => {


    connection.query('SELECT * FROM `nursery`', (err, rows, fields) => {
        if (!err) {
            res.json({
                rows,
                Message: "This is nursery"
            })
        }

        else
            console.log(err);
    })
}



// Add New Nursery

exports.addNewNursery = async (req, res) => {

    const query = 'INSERT INTO `nursery`(`id`, `business_name`, `business_location`, `description`, `gallery`, `city`, `phone_number`, `gmail`, `password`) VALUES (?,?,?,?,?,?,?,?,?);';

    // Value to be inserted 


    // Value to be inserted 
    let id = req.body.id;
    let business_name = req.body.business_name;
    let business_location = req.body.business_location;
    let description = req.body.description;
    let gallery = req.body.gallery;
    let city = req.body.city;
    let phone_number = req.body.phone_number;
    let gmail = req.body.gmail;
    let password = req.body.password;
    // Creating queries 

    connection.query(query, [id, business_name, business_location, description, gallery, city, phone_number, gmail, password], (err, rows) => {
        if (!err) {
            res.json({
                status: true,
                Message: "The data is inserted in Nursery Table"
            })
        }

        else
            console.log(err);

    });
}

//Delete Api 

exports.deleteNurseryById = async (req, res) => {
    // console.log(req.params.id)


    connection.query('DELETE FROM nursery WHERE id = ' + req.params.id, (err, rows, fields) => {
        if (!err) {
            res.json({
                status: true,
                Message: "The data is delete in Nursery table using by id"
            })
        }

        else
            console.log(err);
    })
}










