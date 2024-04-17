const express = require('express')
const app= express();

// Port Number
const port= 5000
const ConnetDB= require('./Config/db')
// creating http instance
const http = require("http").createServer(app);
// Socket between Client and Server
const io = require("socket.io")(http);

// Body Parser for Parsing the data
const bodyparser =require('body-parser')
var cors = require('cors')
const session = require('express-session');
require('./utils/Paymentsheduler');

app.use(cors())
//Configuring Express Server

app.use(bodyparser.json());
app.use(session({
  secret: 'Majid',
  resave: false,
  saveUninitialized: true
}));


app.use(bodyparser.urlencoded({ extended: true }))
app.use("/uploads",express.static('uploads'));

//Routes

const admin = require('./Routes/adminRoutes')
const chat =require('./Routes/chatRoutes')
const nursery=require('./Routes/nurseryRoutes')
const order=require('./Routes/orderRoutes')
const payment=require('./Routes/paymentsRoutes')
const plant=require('./Routes/plantRoutes')
const user=require('./Routes/userRoutes')
const Dasboard=require('./Controllers/DashboardController')
const Cart =require('./Routes/Cart')
const UserVerify = require('./Routes/adminverifyUsersRoutes')



//Routes Trackttps://www.thunderclient.com/welcome

// app.use('/admin',admin)
// app.use('/chat', chat)
app.use('/nursery',nursery)
app.use('/order',order)
app.use('/payment', payment)
app.use('/plant',plant)
app.use('/dashboard',Dasboard)
app.use('/cart',Cart)
app.use('/admin',admin)
app.use('/UsersVerify',UserVerify)

app.use('/user',user)

app.use('*' ,(req,res, next)=>{
  
    res.status(404).json({
    
      status: `Fail`,
      message: `Can't find ${req.originalUrl} on this server`
    });
    })


    //Chat App working using socket.io

// creating socket io instance


io.on("connection", function (socket) {

  console.log("User connected", socket.id);
});


var users = [];
 
io.on("connection", function (socket) {
    console.log("User connected", socket.id);
 
    // attach incoming listener for new user
    socket.on("user_connected", function (username) {
        // save in array
        users[username] = socket.id;
 
        // socket ID will be used to send message to individual person
 
        // notify all connected clients
        io.emit("user_connected", username);
    });
});


// listen from client inside IO "connection" event
socket.on("send_message", function (data) {
  // send event to receiver
  var socketId = users[data.receiver];

  io.to(socketId).emit("new_message", data);
});


// listen from client
socket.on("send_message", function (data) {
  // send event to receiver
  var socketId = users[data.receiver];

  io.to(socketId).emit("new_message", data);

  // save in database
  connection.query("INSERT INTO chat (sender, receiver, message) VALUES ('" + data.sender + "', '" + data.receiver + "', '" + data.message + "')", function (error, result) {
      //
  });
});


// create api to return all messages
app.post("/get_messages", function (request, result) {
  // get all messages from database
  connection.query("SELECT * FROM chat WHERE (sender = '" + request.body.sender + "' AND receiver = '" + request.body.receiver + "') OR (sender = '" + request.body.receiver + "' AND receiver = '" + request.body.sender + "')", function (error, messages) {
      // response will be in JSON
      result.end(JSON.stringify(messages));
  });
});



app.listen(port, ()=>{
    console.log(`Server is listening on Port ${port}`)
})


