const express = require('express')

const connection = require('../Config/db')

exports.getchats = async (req, res) => {
    const user_id = req.params.id; // Corrected extraction of route parameter
    
    if (user_id) {
        connection.query(`SELECT * FROM chat INNER JOIN nursery ON chat.receiver_id = nursery.seller_id WHERE sender_id = ${user_id}`, (selectErr, rows) => {
            if (!selectErr) {
                if (rows.length > 0) { // Corrected variable name
                    res.json({
                        data: rows,
                    });
                } else {
                    res.json({
                        message: 'No chats found for the specified user.',
                    });
                }
            } else {
                console.error('Error fetching chats:', selectErr);
                res.status(500).json({ error: 'An error occurred while fetching chats.' });
            }
        });
    } else {
        res.status(400).json({ error: 'User ID parameter is missing.' });
    }
};


exports.savechat = async (req, res) => {

    const user_id = req.body.user_id;
    const nurseryid = req.body.nurseryid;
    if (user_id && nurseryid) {

        connection.query(`SELECT * FROM chat WHERE sender_id = ${user_id} AND receiver_id = ${nurseryid}`, (selectErr, selectRows) => {
            if (!selectErr) {
                if (selectRows.length > 0) {
                    
                  
                    res.json({
                        status: false,
                        message: 'Data already exists.',
                        chatid: selectRows[0].chatid,
                    });
                } else {
                    // Data doesn't exist, perform the insert
                    connection.query(`INSERT INTO chat (sender_id, receiver_id) VALUES (${user_id}, ${nurseryid})`, (insertErr, insertRows, insertFields) => {
                        if (!insertErr) {
                            const insertedId = insertRows.insertId; // Get the inserted ID
                          
                            res.json({
                                status: true,
                                chatid: insertedId, // Include the inserted ID in the response
                               
                            });
                        } else {
                            console.log(insertErr);
                            res.status(500).json({ error: 'An error occurred while inserting into the chat table.' });
                        }
                    });
                }
            } else {
                console.log(selectErr);
                res.status(500).json({ error: 'An error occurred while checking for existing data.' });
            }
        });

    }
};

