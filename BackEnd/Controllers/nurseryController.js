const express = require('express')

const connection = require('../Config/db')




// Get Nursery by Id

exports.getNurserybyId = async (req, res) => {


    // Use a parameterized query to prevent SQL injection
    connection.query('SELECT * FROM nursery WHERE seller_id = ?', [req.params.id], (err, rows, fields) => {
        if (!err) {
            res.json({
                rows,
                status: true,
                Message: "Get Nursery by id"
            });
        } else {
            console.log(err);
            // It's a good practice to send a response in case of error as well
            res.status(500).json({
                status: false,
                message: "Internal Server Error"
            });
        }
    });
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










