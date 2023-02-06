import express from "express"
import fs from "fs"
import inesf from "./routes/bb.rotes.js";
import bilal from "./config/db.js"
//   import bhati from "./routes/category.routes.js"
// app.use(bhati)
const app = express();
app.use(express.json())
import bhati from "./routes/category.routes.js"
app.use(bhati)
app.use(inesf)
// import bhati from "./routes/category.routes.js"
import owais from "./routes/sub_category.routes.js"
import royal from "./routes/product.routes.js"
import reviewrating from "./routes/reviewrating.routes.js"
import commnetroutes from "./routes/commnet.routes.js"
app.use(commnetroutes)
app.use(reviewrating)
app.use(royal)
app.use(owais)
// app.use(bhati)
bilal()


// const app = express();
// app.use(express.json())
// app.use(inesf)

// app.set('view engine','ejs');
// // app.set('view engine', 'ejs');

// // use res.render to load up an ejs view file

// // index page
// app.get('/home/:room/:user', function(req,res) {
//   res.render('pages/index',{"room":req.params.room,"user":req.params.user});
// });

// import { createServer } from "http";
// import { Server } from "socket.io";
// const httpServer = createServer();
// const socket = new Server(httpServer, {
//   cors: {
//     origins: ['http://dev.adaiya.in', 'http://localhost:4200', 'http://localhost:9002'],
//     'transports': ['websocket', 'pollings']
//   },
// });
// var users = {};
// var allusers=[]
// var allroom=[]
// socket.on('connection', (socket) => {
//   console.log("Connected...");
//   socket.on('judna', (data) => {
//     allusers.push(data.user)
//     // console.log("allusers-----",allusers);
//     let alluserFinal=[...new Set (allusers)];
//     allroom[data.room]=alluserFinal
//     // console.log("alluserFinal---------",alluserFinal);
//     // console.log("allroom---------",allroom);
//     if (allroom[data.room].length<=2) {
      
    
//     // console.log("Connected Join----", data);
//     socket.join(data.room);
//     users[socket.id] = data.user;
//     var JoinRes = {
//       message: data.user + ' has joined ' + data.room + " room",
//       users: users,
//     };
//     socket.broadcast.to(data.room).emit('ha_jud_gya_hai', JoinRes);
//   }else{
//     socket.emit('judna', 'Room is full');
//   }
//   });
// });






// import { createServer } from "http";
// import { Server } from "socket.io";
// const httpserver = createServer();
// const socket = new Server(httpserver, {
//     cors: {
//         origins: ['http://dev.adaiya.in', 'http://localhost:4200', 'http://localhost:9002'],
//         'transports': ['websocket', 'pollings']
//     },

// })
// var userss = {}
// socket.on("connection", (socket) => {
//     console.log("connected -----");
//     socket.on("Judan", (data) => {
//         console.log("connected Join----", data);
//         socket.join(data.room);
//         userss[socket.id] = data.user
//         var messagesend = {
//             message: data.user + "has joined" + data.room + "room",
//             userss: userss,
//         }
//         socket.broadcast.to(data.room).emit("hai_jud_gya_hai", messagesend);
//     })
// })







app.listen(3002, (req, rea) => {
  console.log("serva")
})

