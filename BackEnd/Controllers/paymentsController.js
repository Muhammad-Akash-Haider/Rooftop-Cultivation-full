const express = require('express')

const connection = require('../Config/db')




//  Get All payment history
exports.paymenthistory = async (req, res) => {


    connection.query('SELECT * FROM `payments_history`', (err, rows, fields) => {
        if (!err) {
            res.json({
                rows
            })
        }

        else
            console.log(err);
    })
}


exports.getpaymentsbyId = async (req, res) => {
    console.log(req.params.id)


    connection.query('SELECT * FROM `payments_history` WHERE seller_id = ' + req.params.id, (err, rows, fields) => {
        if (!err) {
            res.json({
                rows,
               
            })
        }

        else
            console.log(err);
    })
}