const express = require('express')


const connection = require('../Config/db')




// Get Nursery by Id

exports.getPlantbyId = async (req, res) => {
    console.log(req.params.id)


    connection.query('SELECT * FROM plant WHERE id = ' + req.params.id, (err, rows, fields) => {
        if (!err) {
            res.json({
                rows
            })
        }

        else
            console.log(err);
    })
}






//  Get All Nursey
exports.getAllPlants = async (req, res) => {


    connection.query('SELECT * FROM `plant`', (err, rows, fields) => {
        if (!err) {
            res.json({
                rows
            })
        }

        else
            console.log(err);
    })
}




//Delete Api 

exports.deletePlantById = async (req, res) => {
    // console.log(req.params.id)


    connection.query('DELETE FROM plant WHERE id = ' + req.params.id, (err, rows, fields) => {
        if (!err) {
            res.json({
                status: true,
                Message: "The data is delete in Plants table using by id"
            })
        }

        else
            console.log(err);
    })
}










