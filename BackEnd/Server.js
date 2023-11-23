const express = require('express')
const app= express();
const port= 5999
const ConnetDB= require('./Config/db')
const bodyparser =require('body-parser')


//Configuring Express Server

app.use(bodyparser.json())


//Routes

const admin = require('./Routes/adminRoutes')
const chat =require('./Routes/chatRoutes')
const nursery=require('./Routes/nurseryRoutes')
const order=require('./Routes/orderRoutes')
const payment=require('./Routes/paymentsRoutes')
const plant=require('./Routes/plantRoutes')
const user=require('./Routes/userRoutes')



//Routes Track

// app.use('/admin',admin)
// app.use('/chat', chat)
app.use('/nursery',nursery)
app.use('/order',order)
// app.use('/payment', payment)
app.use('/plant',plant)
app.use('/user',user)

app.use('*' ,(req,res, next)=>{
  
    res.status(404).json({
    
      status: `Fail`,
      message: `Can't find ${req.originalUrl} on this server`
    });
    })


app.listen(port, ()=>{
    console.log(`Server is listening on Port ${port}`)
})


