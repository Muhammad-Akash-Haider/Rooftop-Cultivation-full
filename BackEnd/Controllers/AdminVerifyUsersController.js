const express = require('express')

const connection =require('../Config/db')

exports.GetVerifcaionDetils=async(req,res)=>{

    
    connection.query('SELECT * FROM `verification_documents`', (err, rows, fields) => {
        if (!err){
        // const row =res.json.rows;
        // console.log(rows)
        res.json({
                rows,
                Message:"This is nursery"
                
               })

        }
    
        else
        console.log(err);
        })

}


