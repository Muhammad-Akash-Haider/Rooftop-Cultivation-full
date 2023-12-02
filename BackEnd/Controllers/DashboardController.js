const express = require('express')
const router = express.Router()
const connection = require('../Config/db')


router.get('/dashboardDetails/:id', async (req, res) => {
    var orders;
    var total_amount;
    var returns;
    var notifications;

    const queryAsync = (sql, values) => {
        return new Promise((resolve, reject) => {
            connection.query(sql, values, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    };

    try {
        // Fetch data from the first table
        const query1 = 'SELECT COUNT(order_amount) AS order_count, SUM(order_amount) AS total_order_amount FROM orders WHERE seller_id = ?';
        const results1 = await queryAsync(query1, [req.params.id]);
        const orders = results1[0].order_count;
        const total_amount = results1[0].total_order_amount;

        // Fetch data from the second table
        // Fetch data from the second table
        const query2 = 'SELECT COUNT(*) AS return_count FROM `return/cancels` WHERE seller_id = ?';
        const results2 = await queryAsync(query2, [req.params.id]);
        const returns = results2[0].return_count;

        // Fetch data from the third table
        const query3 = 'SELECT COUNT(*) AS notification_count FROM Notifications WHERE user_id = ?';
        const results3 = await queryAsync(query3, [req.params.id]);
        const notifications = results3[0].notification_count;

        // Send the response with all the data
        res.json({ orders, total_amount, returns, notifications });
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});
module.exports = router;