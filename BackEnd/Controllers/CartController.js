const express = require('express')

const connection = require('../Config/db')


exports.AddProductToCart = async (req, res) => {

    const query = 'INSERT INTO `cart`( `product_id`, `buyer_id`,`stock` ) VALUES (?,?,?);';
    // Value to be inserted 

    let product_id = req.body.product_id;
    let buyer_id = req.body.user_id;
    let stock = req.body.stock;
    // Value to be inserted 

   
    // Creating queries 
   
    connection.query(query, [product_id, buyer_id ,stock], (err, rows) => {
        if (!err) {
            res.json({
                status: true,
                Message: "Producted Added To  Cart"
            })
        }

        else
            console.log(err);

    });

}


exports.CartItems = async (req, res) => {

    connection.query('SELECT * from `cart` INNER JOIN `plant` ON cart.product_id = plant.id WHERE buyer_id = ?', [req.params.id],(err, rows) => {
        if (!err) {
            res.json({
                rows,
                status: true,
            })
        }
        else
            console.log(err);

    });
}


exports.UpdateStock = async (req, res) => {
    const { productId } = req.body;
  
    // Assuming you have a 'cart' table with 'productId' and 'stock' columns
    const updateQuery = `UPDATE cart SET stock = stock + 1 WHERE productId = ${productId}`;
  
    connection.query(updateQuery, (err, result) => {
      if (err) {
        console.error('Error updating stock:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.json({ success: true, message: 'Stock updated successfully' });
      }
    });
  };