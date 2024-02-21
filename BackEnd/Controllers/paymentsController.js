const express = require("express");
const stripe = require("stripe")("sk_test_51OjdVEDLpC8Qo70I0YrtXllKMfOrMKoLhlYZmTRzHD5kMdFjvcQkXgrE9Rj22j9v0CyP1EzDv42tWxUEDUqk9h2P00QTkncruY");
const url = require('url');
const connection = require("../Config/db");
const { log } = require("console");

//  Get All payment history
exports.paymenthistory = async (req, res) => {
  connection.query("SELECT * FROM `payments_history`", (err, rows, fields) => {
    if (!err) {
      res.json({
        rows,
      });
    } else console.log(err);
  });
};

exports.getpaymentsbyId = async (req, res) => {
  console.log(req.params.id);

  connection.query(
    "SELECT * FROM `payments_history` WHERE seller_id = " + req.params.id,
    (err, rows, fields) => {
      if (!err) {
        res.json({
          rows,
        });
      } else console.log(err);
    }
  );
};

exports.Makepayment = async (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  console.log(id)
  const { products } = req.body;


  const lineItems = products.map((product) => ({
    price_data: {
      currency: "pkr",
      product_data: {
        name: product.name
      },
      unit_amount: product.price * 100,
    },
    quantity: product.stock
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: `http://localhost:5000/payment/saveorder/{CHECKOUT_SESSION_ID}/${id}`,
    cancel_url: "http://localhost:3000",
  });

  res.json({ id: session.id, url: session.url });
};


exports.saveorder = async (req, res) => {

  const sessionId = req.params.session_id;
  const userId = req.params.id;

  const session = await stripe.checkout.sessions.retrieve(sessionId);
  const paymentId = session.payment_intent;
  var orderId ;
  const cartItemsQuery = `SELECT * FROM cart WHERE buyer_id = ${userId}`;

  connection.query(cartItemsQuery, async (err, cartItems) => {
    if (err) {
      console.error("Error retrieving cart items:", err);
      return res.status(500).json({ error: "Error retrieving cart items" });
    }

    // Assuming you have a table named 'orders' to store orders
    const createOrderQuery = `INSERT INTO orders (buyer_id, status, order_date) VALUES (${userId}, 'Pending', NOW())`;

    connection.query(createOrderQuery, async (err, result) => {
      if (err) {
        console.error("Error creating order:", err);
        return res.status(500).json({ error: "Error creating order" });
      }

     orderId = result.insertId;

      // Store each cart item as an order item
      for (const cartItem of cartItems) {
        const { product_id, stock } = cartItem;
        // Assuming you have a table named 'order_items' to link orders with items
        const createOrderItemQuery = `INSERT INTO order_items (order_id, product_id, quantity) VALUES (${orderId}, ${product_id}, ${stock})`;
        connection.query(createOrderItemQuery, (err, result) => {
          if (err) {
            console.error("Error creating order item:", err);
            return res.status(500).json({ error: "Error creating order item" });
          }
        });
      }

      // Clear the user's cart (assuming you have a table named 'cart')
      const clearCartQuery = `DELETE FROM cart WHERE buyer_id = ${userId}`;
      connection.query(clearCartQuery, (err, result) => {
        if (err) {
          console.error("Error clearing cart:", err);
          return res.status(500).json({ error: "Error clearing cart" });
        }

        // Return success response
        res.redirect('http://localhost:3000');

      });
    });




  });


};


exports.refundPayment = async (req, res) => {

  res.send(req.session.user)
  // try {
  //   const refund = await stripe.refunds.create({
  //     payment_intent : res.body.payment_id,
  //     amount: res.body.amount
  //   });

  //   console.log('Refund successful:', refund);
  //   res.status(200).json({ success: true, refund });
  // } catch (error) {
  //   console.error('Refund error:', error);
  //   res.status(500).json({ success: false, error: error.message });
  // }
};

