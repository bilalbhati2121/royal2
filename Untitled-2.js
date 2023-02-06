// // import express from "express";
// // const app = express()
// // app.get("/userlist",(req,res) => {
// //     console.log("Get userr list----");
// //     res.send({"email":"asdasd"});
// // })
// // //app.post("/bhati",(req,res) => {
// //   //  console.log("Get user number---");
// //    // res.send({"email":"number"});
// // //})

// // app.listen(3002,(request,response) =>{
// //     console.log("Yes your server connected with PORT:3002");
// // })
 import express from "express";
 const app = express();
 app.get("/userlist",(req,res) => {
     console.log("Get userr list----");
     res.send({"email":"asdasd"});

     })

      app.get("/bhati",(req,res) => {
     console.log("Get user number---",);
    res.send({"email":"number",});
 })
 app.post("/school",(req,res)=>{
     console.log("Get user password----","Get user dfghj----");
   //  console.log("Get user dfghj ----");
     res.send({"email":"password"})
     //res.send({"email":"dfghj"})
    
 })

 app.get ("/owais",(rigt,ruga)=>{
    console.log("Get user forgotpassword")
    ruga.send({"email":"forgotpassword"})
 })

 app.listen(3001,(request,response) =>{
     console.log("Yes your server connected with PORT:3002");
})
// import express from "express";
// const app = express();
//  //aap.get ("/shakir",(req,res)=>{
//    // console.log("Get user number ---- ")
//     //res.send({"phone":"number"})ss
// //})
//  app.get("/userlist",(req,res) => {
//          console.log("Get userr list----");
//          res.send({"email":"asdasd"});
//      })

// app. listen(3001,(request,response)=>{
// console.log("ertyuioiuytr")
// })