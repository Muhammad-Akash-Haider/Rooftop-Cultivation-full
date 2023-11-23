const express = require('express')

const connection =require('../Config/db')




// Get Nursery by Id

exports.getPlantbyId=async(req,res)=>{
    console.log(req.params.id)


    connection.query('SELECT * FROM plant WHERE id = ' + req.params.id, (err, rows, fields) => {
        if (!err){
        res.json({
                rows,
                status:true,
                Message:"Get Plant by id"  
               })
        }
    
        else
        console.log(err);
        }) 
}






//  Get All Nursey
exports.getAllPlants=async(req,res)=>{

    
    connection.query('SELECT * FROM `plant`', (err, rows, fields) => {
        if (!err){
        res.json({
                rows,
                Message:"Get All Plants from Database"  
               })
        }
    
        else
        console.log(err);
        }) 
}






// Add New Nursery

exports.addNewPlant=async(req,res)=>{
                    // console.log(req.body)

    const query = 'INSERT INTO `plant`(`id`, `name`, `price`, `stock`, `category`, `description`, `images`) VALUES (?,?,?,?,?,?,?);'; 


     // Value to be inserted 
          
        let  id =req.body.id;
        let  name=req.body.name;
        let  price=req.body.price;
        let  stock=req.body.stock;
        let  category=req.body.category;
        let  description=req.body.description;
        let  images=req.body.images;
     // Value to be inserted 
          
            // Creating queries 

            connection.query(query, [id,name,price,stock,category,description,images], (err, rows) => { 
                if (!err){
                    res.json({
                            status: true,
                            Message:"The data is inserted in Plants Table"  
                           })
                    }
                
                    else
                    console.log(err);
                       
                    }); 

                        }




           //Delete Api 

                    exports.deletePlantById=async(req,res)=>{
                        // console.log(req.params.id)

    
                        connection.query('DELETE FROM plant WHERE id = ' + req.params.id, (err, rows, fields) => {
                            if (!err){
                            res.json({
                                    status:true,
                                    Message:"The data is delete in Plants table using by id"  
                                   })
                            }
                        
                            else
                            console.log(err);
                            }) 
                    }
                    

                    







