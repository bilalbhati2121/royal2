// import{createServer} from "https";
// const httpServer = createServer();
// httpServer . listen(4000,(req,res) =>{
//     console.log("connect with server on PORT:4000")
// })
//const { read } = require("http
//  const http = require ("http")
//  const server = http.createServer((req,res)=>{
//   res.end("Hello");
//   })
//   server.listen(3001,"127.0.0.1",()=>{
//   console.log("server ");
//   })
//console.log("bilal")
import express from "express"
import bodyParser from "body-parser";
const app = express();
aap.get(bodyParser.urlencoded({extended: true}));
aap.get(express.json());
aap. get ("/get-data",(req,res)=>{
  console.lag(req.query);
res.send({"emil":"bilal"});


})
app.listen(3001,(req,res)=>{
  console.log("bhati")

})