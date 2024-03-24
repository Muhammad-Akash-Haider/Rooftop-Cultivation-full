const express = require('express')
const stripe = require("stripe")("sk_test_51OjdVEDLpC8Qo70I0YrtXllKMfOrMKoLhlYZmTRzHD5kMdFjvcQkXgrE9Rj22j9v0CyP1EzDv42tWxUEDUqk9h2P00QTkncruY");

const connection = require('../Config/db')


exports.getOrderforadmin = async (req, res) => {

    connection.query('SELECT * FROM orders \
    INNER JOIN order_items ON orders.id = order_items.order_id \
    INNER JOIN plant ON plant.id = order_items.product_id  WHERE order_items.status NOT IN ("return" ,"cancelled") '
        , (err, rows, fields) => {
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

// Get Nursery by Id
exports.getOrderbyIdseller = async (req, res) => {

    connection.query("SELECT * FROM orders \
    INNER JOIN order_items ON orders.id = order_items.order_id \
    INNER JOIN plant ON plant.id = order_items.product_id \
    WHERE order_items.status NOT IN ('return', 'cancelled') AND seller_id = '" + req.params.id + "'", (err, rows, fields) => {
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

exports.getOrderbyId = async (req, res) => {
    console.log(req.params.id)
    connection.query('SELECT * FROM orders \
    INNER JOIN order_items ON orders.id = order_items.order_id \
    INNER JOIN plant ON plant.id = order_items.product_id \
    WHERE orders.buyer_id = ' + req.params.id, (err, rows, fields) => {
        if (!err) {
            res.json({
                rows,
                status: true,
                Message: "Get orders for Buyer"
            })

        }

        else
            console.log(err);
    })
}

const Refund = async (amount ,paymentid) => {
    try {
        const refund = await stripe.refunds.create({
            payment_intent: paymentid,
            amount: amount * 100
        });

        console.log('Refund successful:', refund);
     
    } catch (error) {
        console.error('Refund error:', error);
       
    }

}

exports.updteOrderStatus = async (req, res) => {

    const productId = req.params.id;
    const newStatus = req.body.status;

    console.log(req.body, newStatus, req.params.id);
    // Validate input
    if (!productId || !newStatus) {
        return res.status(400).json({ error: 'Invalid input' }); 0
    }


    const updateQuery = 'UPDATE `order_items` SET change_date = NOW(), status = ? WHERE items_id = ?';

    connection.query(updateQuery, [newStatus, productId], (updateErr, updateResults) => {


        if (updateErr) {
            console.error('Error updating status:', updateErr);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (updateResults.affectedRows === 0) {
            // No rows were affected, meaning the product with the given ID was not found
            return res.status(404).json({ error: 'Product not found' });
        }

        const selectQuery = 'SELECT * FROM `order_items` INNER JOIN orders ON orders.id = order_items.order_id INNER JOIN plant ON plant.id = order_items.product_id WHERE items_id = ?';

        connection.query(selectQuery, [productId], (selectErr, rows) => {
            if (selectErr) {
                console.error('Error retrieving data:', selectErr);
                connection.end(); // Close the connection in case of error
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            if (rows.length > 0) {

                const orderDetails = rows[0];
                const amount =orderDetails.quantity * orderDetails.price;
                const paymentid =orderDetails.payment_id;
                Refund(amount,paymentid);
                
            }
        })

        // Successful update
        res.json({ message: 'Status updated successfully' });
    });

}




//  Get All Nursey
exports.getAllOrder = async (req, res) => {


    connection.query('SELECT * FROM `orders` INNER JOIN `order_items` ON orders.id = order_items.order_id ', (err, rows, fields) => {
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

exports.getAllreturnsByid = async (req, res) => {
    console.log(req.params.id)
    connection.query('SELECT * FROM `orders` INNER JOIN `order_items` ON orders.id = order_items.order_id INNER JOIN `plant` ON order_items.product_id = plant.id INNER JOIN `users` ON plant.seller_id = users.id  WHERE users.id = ? AND order_items.status = "Return" OR  order_items.status = "Cancelled"', [req.params.id], (err, rows, fields) => {
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

exports.getAllreturns = async (req, res) => {
    console.log(req.params.id)
    connection.query('SELECT * FROM `orders` INNER JOIN `order_items` ON orders.id = order_items.order_id INNER JOIN `plant` ON order_items.product_id = plant.id INNER JOIN `users` ON plant.seller_id = users.id  WHERE order_items.status = "Return" OR  order_items.status = "Cancelled"', (err, rows, fields) => {
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










