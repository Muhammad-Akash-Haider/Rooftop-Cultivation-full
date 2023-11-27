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


