const express = require("express");
const stripe = require("stripe")("sk_test_51OjdVEDLpC8Qo70I0YrtXllKMfOrMKoLhlYZmTRzHD5kMdFjvcQkXgrE9Rj22j9v0CyP1EzDv42tWxUEDUqk9h2P00QTkncruY");
const url = require('url');
const connection = require("../Config/db");

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
//   console.log(req.body);

  const {products} = req.body;


    const lineItems = products.map((product)=>({
        price_data:{
            currency:"pkr",
            product_data:{
                name:product.name
            },
            unit_amount:product.price  * 100 ,
        },
        quantity:product.stock
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:lineItems,
        mode:"payment",
        success_url:"http://localhost:5000/payment/saveorder/{CHECKOUT_SESSION_ID}",
        cancel_url:"http://localhost:3000/cancel",
    });

    res.json({ id: session.id, url: session.url });
};


exports.handleWebhook = async (req, res) => {
  console.log(req.params,'i have goten the session id and all work doen in payment')
  res.send(req.params)
  // const sessionId = req.query.session_id;
  // const session = await stripe.checkout.sessions.retrieve(sessionId);
  // const paymentId = session.payment_intent;
  // // Now you can store the payment ID in your database
  // console.log('Payment ID:', paymentId);
  // // You can write code here to store the payment ID in your database
  // res.send('Payment successful! Payment ID: ' + paymentId);
};