const express = require('express')

const connection = require('../Config/db')




// Get Nursery by Id

exports.getOrderbyId = async (req, res) => {
    console.log(req.params.id)


    connection.query('SELECT * FROM orders WHERE id = ' + req.params.id, (err, rows, fields) => {
        if (!err) {
            res.json({
                rows,
                status: true,
                Message: "Get Plant by id"
            })
        }

        else
            console.log(err);
    })
}

exports.updteOrderStatus = async (req, res) => {

    const productId = req.params.id;
    const newStatus = req.body.status;

    console.log( req.body  , newStatus,  req.params.id);
    // Validate input
    if (!productId || !newStatus) {
        return res.status(400).json({ error: 'Invalid input' });
    }


    const updateQuery = 'UPDATE `orders` SET status = ? WHERE id = ?';

    connection.query(updateQuery, [newStatus, productId], (updateErr, updateResults) => {
    

        if (updateErr) {
            console.error('Error updating status:', updateErr);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (updateResults.affectedRows === 0) {
            // No rows were affected, meaning the product with the given ID was not found
            return res.status(404).json({ error: 'Product not found' });
        }

        // Successful update
        res.json({ message: 'Status updated successfully' });
    });

}






//  Get All Nursey
exports.getAllOrder = async (req, res) => {


    connection.query('SELECT * FROM `orders`', (err, rows, fields) => {
        if (!err) {
            res.json({
                rows,
                Message: "Get All Orders from Database"
            })
        }

        else
            console.log(err);
    })
}

exports.getAllreturns = async (req, res) => {

    connection.query('SELECT * FROM `return/cancels`', (err, rows, fields) => {
        if (!err) {
            res.json({
                rows,
                Message: "Get All returns and cancelations from Database"
            })
        }

        else
            console.log(err);
    })
}






// Add New Nursery

exports.addNewOrder = async (req, res) => {
    // console.log(req.body)

    const query = 'INSERT INTO `orders`(`id`, `customer_name`, `order_date`, `product_name`, `status`, `order_amount`) VALUES (?,?,?,?,?,?);';


    // Value to be inserted 

    let id = req.body.id;
    let customer_name = req.body.customer_name;
    let order_date = req.body.order_date;
    let product_name = req.body.product_name;
    let status = req.body.status;
    let order_amount = req.body.order_amount;
    // Value to be inserted 

    // Creating queries 

    connection.query(query, [id, customer_name, order_date, product_name, status, order_amount], (err, rows) => {
        if (!err) {
            res.json({
                status: true,
                Message: "The data is inserted in orders Table"
            })
        }

        else
            console.log(err);

    });

}




//Delete Api 

exports.deleteOrderById = async (req, res) => {
    // console.log(req.params.id)


    connection.query('DELETE FROM orders WHERE id = ' + req.params.id, (err, rows, fields) => {
        if (!err) {
            res.json({
                status: true,
                Message: "The data is delete in orders table using by id"
            })
        }

        else
            console.log(err);
    })
}










