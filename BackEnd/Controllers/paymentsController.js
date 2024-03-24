const express = require("express");
const stripe = require("stripe")("sk_test_51OjdVEDLpC8Qo70I0YrtXllKMfOrMKoLhlYZmTRzHD5kMdFjvcQkXgrE9Rj22j9v0CyP1EzDv42tWxUEDUqk9h2P00QTkncruY");
const url = require('url');
const connection = require("../Config/db");
const { log } = require("console");
const { sendEmail } = require('../utils/EmailSender');

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

///// payments work for seller  
exports.SellerPaymentMethod = async (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  console.log(id)
  const { amount } = req.body;

  const lineItems = [{
    price_data: {
      currency: "pkr",
      product_data: {
        name: "test charge"
      },
      unit_amount: amount * 400,
    },
    quantity: 1,
  }];

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: `http://localhost:5000/payment/savemethod/{CHECKOUT_SESSION_ID}/${id}`,
    cancel_url: "http://localhost:3000",
  });

  res.json({ id: session.id, url: session.url });
}

exports.savebank = async (req, res) => {
  const sessionId = req.params.session_id;
  const sellerId = req.params.id;

  const session = await stripe.checkout.sessions.retrieve(sessionId);
  const paymentId = session.payment_intent;
  // Extract customer email from Payment Intent
  const customerEmail = session.customer_details.email

  try {

    const subject = 'Payment Method Added to system';
    const text = 'This is a confirmation email tahta your payment method is added in teh system and you can just get your payments in this account of your sells';
    await sendEmail(customerEmail, subject, text);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Failed to send email:", error);
  }

  const insertQuery = `INSERT INTO bankaccounts (seller_id, payment_id) 
  VALUES (${sellerId}, '${paymentId}')
  ON DUPLICATE KEY UPDATE payment_id = '${paymentId}'`;

  // Execute the INSERT ... ON DUPLICATE KEY UPDATE query
  connection.query(insertQuery, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    console.log('Rows affected:', result.affectedRows);
  });


  res.redirect('http://localhost:3000');

}

exports.Testapi = async (req, res) => {

  async function transferPayment(paymentId, amount) {

    const percentage = 0.05; // 5 percent
    const transferAmount = amount * (1 - percentage); // Calculate the transfer amount

    console.log('Transfer Amount:', transferAmount);
    console.log('Payment ID:', paymentId);

    try {
      const transfer = await stripe.transfers.create({
        amount: transferAmount * 100, // Amount in cents
        currency: 'pkr', // Change to the appropriate currency
        destination: paymentId, // Seller's connected Stripe account ID
      });

      return transfer;
    } catch (error) {
      console.error('Transfer error:', error);
      throw error;
    }

  }



  connection.query('SELECT * FROM orders \
INNER JOIN order_items ON orders.id = order_items.order_id \
INNER JOIN plant ON plant.id = order_items.product_id \
INNER JOIN users ON plant.seller_id = users.id WHERE order_items.status NOT IN ("return", "cancelled")'
    , (err, rows, fields) => {
      if (!err) {
        // Filter orders placed 7 days ago and whose payment status is still pending
        console.log(rows)
        const currentDate = new Date();
        const sevenDaysAgo = new Date(currentDate.getTime() - (7 * 24 * 60 * 60 * 1000)); // Calculate 7 days ago
        const eligibleOrders = rows.filter(order => new Date(order.change_date) <= sevenDaysAgo && order.status === 'Delievered');
        console.log(eligibleOrders, "eligibale orders")


        eligibleOrders.forEach(order => {

          // Assuming 'connection' is a valid connection to the database
          connection.query('SELECT * FROM `bankaccounts` WHERE seller_id = ?', order.seller_id, (queryErr, results) => {
            if (queryErr) {
              res.status(500).json({ error: 'Database error' }); // Sending a 500 Internal Server Error response
            } else {
              if (results.length > 0) {

                const paymentId = results[0].payment_id;
                const amount = order.price;

                // transferPayment(paymentId, amount)
                // .then(refund => {
                //     console.log('Payment transfer successful:', refund);

                // })
                // .catch(error => {
                //     res.status(500).json({ success: false, error: error.message });
                // });

                // query for update order status

                connection.query('UPDATE order_items SET status = ? WHERE items_id = ?', ['completed', order.items_id], (updateErr, updateResult) => {
                  if (updateErr) {
                    console.error(`Error updating payment status for order ${order.items_id}:`, updateErr);
                  } else {
                    console.log(`Payment status updated for order ${order.items_id}`);
                  }
                });

                /////query for transation 

                const insertQuery = `INSERT INTO payments_history (payment_date, payment_method, order_id, payment_amount )
                     VALUES (?, ?, ?, ?)`;
                const values = [ Date.now() , 'Bank Transfer', order.items_id, order.price ];

                // Execute the query
                connection.query(insertQuery, values, (error, results, fields) => {
                  if (error) {
                    console.error('Error occurred:', error);
                    throw error;
                  }
                  console.log('Insert successful!');
                });


              } else {

                console.log("payment method is no added")
              }
            }
          });


        });

        res.json({
          status: true,
          Message: "Funds transferred successfully"
        });
      } else {
        console.error(err);
        res.json({
          status: false,
          Message: "Error fetching orders"
        });
      }
    });




}

/////payments work for order 

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


  try {
    const subject = 'Order Placed ';
    const customerEmail = session.customer_details.email;
    const amountTotal = session.amount_total;
    const truncatedAmount = Math.floor(amountTotal / 100);

    console.log(truncatedAmount);
    try {
      const subject = 'Order Confirmation';
      const text = `Dear ${session.customer_details.name},\n\n  You placed Order of amount ${truncatedAmount} on our business rooftopcultivation . We are pleased to confirm that your payment has been successfully processed with your card \n\n Best regards,\nThe [RoofTop Cultivation] Team`;

      await sendEmail(customerEmail, subject, text);
      console.log("Email sent successfully!");
    } catch (error) {
      console.error("Failed to send email:", error);
    }

  } catch (error) {
    console.error("Failed to send email:", error);
  }

  var orderId;
  const cartItemsQuery = `SELECT * FROM cart WHERE buyer_id = ${userId}`;

  connection.query(cartItemsQuery, async (err, cartItems) => {
    if (err) {
      console.error("Error retrieving cart items:", err);
      return res.status(500).json({ error: "Error retrieving cart items" });
    }

    // Assuming you have a table named 'orders' to store orders
    const createOrderQuery = `INSERT INTO orders (buyer_id, order_date , payment_id ) VALUES (${userId}, NOW() , '${paymentId}' )`;

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

        const createstockItemQuery = "UPDATE plant SET stock = stock - 1 WHERE id = ?";
        connection.query(createstockItemQuery, [product_id], (err, result) => {
          if (err) {
            console.error("Error decrementing stock:", err);
            return res.status(500).json({ error: "Error decrementing stock" });
          }
          // Handle successful update
        });

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

