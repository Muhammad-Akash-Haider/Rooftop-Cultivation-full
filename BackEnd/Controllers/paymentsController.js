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
        cancel_url:"http://localhost:3000",
    });

    res.json({ id: session.id, url: session.url });
};


exports.handleWebhook = async (req, res) => {
  console.log(req.params, 'I have gotten the session id and all work done in payment');
  
  const sessionId = req.params.session_id;
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  
  // Extract the latest charge ID from the session
  const chargeId = session.payment_intent.charges.data[0].id;
  
  // Now you have the charge ID
  console.log('Charge ID:', chargeId);
  
  res.send('Payment successful! Charge ID: ' + chargeId);
};


exports.refundPayment = async (req, res) => {
  
  try {
    const refund = await stripe.refunds.create({
      charge: "ch_3Okni7DLpC8Qo70I2GCb7wwK",
      // amount: '200' // specify the amount to refund, in cents or smallest currency unit
    });
    // const refund = await stripe.refunds.create({
    //   charge: req.body.charge,
    //   amount: req.body.amount // specify the amount to refund, in cents or smallest currency unit
    // });
    console.log('Refund successful:', refund);
    res.status(200).json({ success: true, refund });
  } catch (error) {
    console.error('Refund error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

