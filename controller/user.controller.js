import jwt from "jsonwebtoken"
import fs from "fs"
import bcrypt from "bcrypt"
import csv from "csvtojson"
import User from "../models/user.models.js"
import randomstring from 'randomstring';
// console.log(radomstring.blue('Hello world!'))
import nodemailer from "nodemailer"
export const mail = async (name, email, token) => {
    // try {
    //     const emailpass = await nodemailer.createTransport({
    //         host: "smtp.gmail.com",
    //         port: 587,
    //         secure: false,
    //         requireTLS: true,
    //         auth: {
    //             user: "bilalbhati011@gmail.com",
    //             pass: "lchhmdfytgkxcdsv"

    //         }


    //     })
    //     //  console.log(emailpass)
    //     //  export default emailpass;

    //     const emailoutpad = {
    //         from: "bilalbhati011@gmail.com",
    //         to: email,
    //         subject: "For Reset password",
    //         html: '   <p> Hii' + name + ',please copy the link and <a href="http://localhost:3002/reset/password?token=' + token + '">  reset your password</a>'

    //     }
    //     // console.log(emailoutpad)
    //     emailpass.sendMail(emailoutpad, function (err, info) {
    //         if (err) {
    //             console.log(err)
    //         }
    //         else {
    //             console.log("eamil has been send", info.response)
    //         }
    //     })
    // } catch (err) {
    //     res.send({
    //         status: false,
    //         mgs: err.message
    //     })
    // }
}
export const signup = async (req, res) => {
    // //    console.log("yeh!")
    // try {
        const pass = await User.findOne({ username: req.body.username })
        const mobilecheckout = await User.findOne({ mobile: req.body.mobile })
        if (pass) {
            res.send({
                status: true,
                mgs: "Email already exist.",
                data:{}
            });
        } else if (mobilecheckout) {
            res.send({
                status: true,
                mgs: "mobile already exist.",
                data: {}
            });
        }
        else {
            var otp = Math.floor(1000 + Math.random() * 9000);
            // const salt = await bcrypt.genSalt(10);
            var passowrdpass = await bcrypt.hash(req.body.password, 10)
            //  salt=req.body.passowrd
            //  res.send(salt)
            req.body.password = passowrdpass
            req.body.otp = otp

            var user = await User.create(req.body)
            // res.send(user)
            if (user) {
                user.token = await jwt.sign({ time: Date(), userId: user._id }, "ck")
                res.send({
                    status: true,
                    msg: "Signup Successfully.",
                    data: user
                 });
              }
            }
           
        }


    // } catch (err) {
    //     res.send({
    //         status: false,
    //         msg: "Something wrong with request.",
    //         data: err
    //     })
    // }


//     try{
//         const classs=await User.findOne({email:req.body.email})
//         const mobile=await User.findOne({mobile:req.body.mobile})
//         if (classs) {
// res.send({try{
//     status:false,
//     mgs:("Email already exist."),
//     data:{}
// });
// // return;
//         }else if (mobile) {
//             res.send({
//                 status:false,
//                 mgs:"mobile already exist.",
//                 data:{}
//             })
//             // return;
//         }

//         else{
//             //const salt=await bcrypt.genSalt(10);
//          var passowrdHash=await bcrypt.hash(req.body.password,11);
//         //     salt=req.body.password
//           //es.send(salti)
//           req.body.password=passowrdHash

//             //res.send(salti)
//             // console.log("salt",salt)

//             // return
//             var user= await User.create(req.body)
//            //console.log("salt",school)
//           if (user) {
//             user.token= await jwt.sign({ time:Date(), userId:user._id},"coching")
//            // console.log("data pass",user.token)
//             res.send({
//                 status:true,
//                 mgs:"singnup successfuly.",
//                 data:user

//             })

// return;
// console.log("data",user)
//  res.send(user)

//var token= await jwt.sign({ time:Date(), userid:_id},"coching")
// school.token=token
// res.send(data)   
//     }
//    //- return;
// }
// // return;

// catch(err){
//     res.send({
//         status:true,
//         mgs:"yeh sahi nhi hai.",
//         data:err
//     })

//}
// const school= await data.create(req.body)
// res.send(school)

//     const salt=await bcrypt.genSalt(10);

//     var token=jwt.sign({ time:Date(), userid:454},"coching")

//     const bilal=jwt.verify(token,"coching")


// // export const datapass=(req,res)=>{
//     // const salt=await bcrypt.genSalt(10);
//     //pass. passowrd=await bcrypt.hash("khan2324",salt);

//     var data=[]
//     var pass= req.body
//    pass.token=token
//    pass. password=await bcrypt.hash("er123",salt);
//    const bhati=await bcrypt.compare("er123","$2b$10$jVT/6YV4.rJXRlyAhyg7UOa/aasmYIcdBB44IqP2l2u42o.weYQ4C")
//    if (bhati) {
//     res.send("ye password shai tu send ho ")
//    }else{
//     res.send("ye password shai nhi hu to ruga ho je")
//    }
//     res.send(pass)
// data.push(pass)
// //pass. passowrd=await bcrypt.hash("khan2324",salt);
// //res.send(pass)

//     var  convertedToString=JSON.stringify(data)
// fs.writeFile("pixel.json",convertedToString,(ck)=>{



// })


//}


export const bhati = (req, res) => {
    fs.readFile("royal.js", (roee, data) => {
        if (roee) {
            var school = {
                "status": false,
                "msg": "Something wrong with request.",
                "data": roee,
            }
        } else {
            var school = {
                "status": true,
                "msg": "File read successfully.",
                "data": JSON.parse(data),

            }
        }
        res.send(school)
    })
    console.log("data pass")
}
export const bilal = (req, res) => {
    fs.writeFile("usre.json", " school ke dssata", (error) => {
        // console.log("data nhi aae hai",error)
        if (error == null) {
            var data = {
                "status": true,
                "msg": "File created successfully.",
                "data": [],
            }
        } else {
            var data = {
                "status": false,
                "msg": "Something wrong with request.",
                "data": error,
            }

        }

        res.send(data)
    })

    console.log("Controller is working");
}
export const apple = (req, res) => {
    res.send({
        "name": "sccdgudg",
        "city": "merta"
    })
}

export const school = async (req, res) => {
    const salt = await bcrypt.genSalt(11);
    var data = {
        time: Date(),
        userId: 11
    }
    const token = jwt.sign(data, "rttrerer")
    //const ndime = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiU3VuIFNlcCAyNSAyMDIyIDE2OjM4OjE0IEdNVCswNTMwIChJbmRpYSBTdGFuZGFyZCBUaW1lKSIsImlkIjozNTc2NSwiaWF0IjoxNjY0MTA0MDk0fQ.nWbXpA3fV1eZCxkBzVYAg0IFGLlyRorNuf1iS6iLGpg","rttrerer")
    // newUser.password = await bcrypt.hash("khan2324", salt);
    var data = [];
    var newuser = req.body;
    newuser.token = token
    const validPassword = await bcrypt.compare("hh1234", "$2b$11$XJ5Cuvmi4Yr4szKZzZN3v.UxJgbASqyk46oI9UkLUql39TpvN7LEW");
    if (validPassword) {
        res.send("Your passowrd is correct.");
    } else {
        res.send("Your passowrd is incorrect.");
    }
    newuser.password = await bcrypt.hash("hh1234", salt);
    console.log("password chaje----", newuser.password)
    res.send(newuser)
    data.push(newuser)
    var convertedToString = JSON.stringify(data)
    fs.writeFile("royal.josn", convertedToString, (err) => {



    })
    res.send({
        "token": token,
        "ndime": ndime
    })
}
// export const lonig=(req,res)=>{
// fs.readFile("royal.json",async(ree,data)=>{

//     var nwedata=req.body
//     var newuser=JSON.parse(data)
//     data.email="bilal123.com"
// if (nwedata.email==newuser.email) {
//  var data={
//     status:true,
//     mgs:"ye api shai hai tu ",
//     data:[]
//  }
// }  else{
//     var data={
//         status:true,
//         mgs:"ye api shai hai tu ",
//         data:ree
//     }

// }
// res.send(data)
// const Password = await bcrypt.compare(nwedata.password,"$2b$10$l4NK9FJmZaqtuLSV6j/vUeX8khLEQ35UvQSNu24JBxtZjWnHgIrTu")
// if(Password){
//     res.send("Your passowrd is correct.");
//   }else{
//   res.send("Your passowrd is incorrect.");
//  }
// })
// // res.send(data)
// // }




export const login = async (req, res) => {

    // try {
        var getUserData = await User.findOne({ username: req.body.username });
        // res.send(req.body)
        if (getUserData) {
            let checkPass = await bcrypt.compare(req.body.password, getUserData.password)
            //   res.send(checkPass)
            if (checkPass) {
                getUserData.token = await jwt.sign({ time: Date(), userId: getUserData._id }, "ck")
                res.send({
                    status: true,
                    msg: "Login Succesfully",
                    data: getUserData
                })
            } else {
                res.send({
                    status: false,
                    msg: "Invalid Password given.",
                    data: {}
                })
            }
        }
        else {
            res.send({
                status: false,
                msg: "Email not founeesud",
                data: {}
            })
        }
    // } catch (err) {
    //     res.send({
    //         status: false,
    //         msg: "Email not found",
    //         data: err
    //     })
    // }
}
// fs. readFile("royal.josn",async(err,data)=>{
//   var oldData = JSON.parse(data)
//     var nweData=req.body;
//     //console.log(nweData)


//     console.log(oldData)
//     if (nweData.email == oldData.email) {

//         //console.log("email pass kare",email )
//        oldData.token = jwt.sign({time:Date(),userId:11},"rttrerer")
//      var validPassword= await bcrypt.compare(oldData.password,nweData.$2b$11$XJ5Cuvmi4Yr4szKZzZN3v.UxJgbASqyk46oI9UkLUql39TpvN7LEW)
//     //  console.log(validPassword)
//     //b.token = jwt.sign({time:Date(),userId:11},"rttrerer")
//     if (validPassword) {



//         //   b.token = jwt.sign({time:Date(),userId:11},"rttrerer")
//         res.send({
//             status:true,
//             msg:"right",
//             data:oldData    

//         })




//     }else{
//         res.send({
//             status:false,
//             msg:"wrong",
//             data:{}
//         })
//     }

//     } else{
//     res.send({
//         status:false,
//         msg:"Email does not exist",
//         data:{email:nweData.email}
//     })

//     }
// res.send([oldData.email,nweData.email])

// })

//}




// export const login = (req,res) =>{
//     fs.readFile("royal.json",async(err,data) =>{
//        var dbData = JSON.parse(data);
//        var reqData = req.body;
//        if(reqData.email == dbData.email){
//           var isValid = await bcrypt.compare(reqData.password,dbData.$2b$10$l4NK9FJmZaqtuLSV6j/vUeX8khLEQ35UvQSNu24JBxtZjWnHgIrTu)  
//           if(isValid){
//              dbData.token = jwt.sign({time:Date(),userId:11},"rttrerer")
//              res.send({
//                 stauts:true,
//                 msg:"Login Successfully.",
//                 data:dbData
//              })
//           }else{
//              res.send({
//                 status:false,
//                 msg:"Invalid password given.",
//                 data:{}
//              })
//           }
//        }else{
//           res.send({
//              status:false,
//              msg:"Email does not exist.",
//              data:{email:reqData.email}
//           });
//        }
//        res.send([reqData.email,dbData.email])
//     })
//  }

// export const login =(req,res)=>{
//     fs.readFile("royal.json",async(ree,data)=>{
//         var oldData=JSON.parse(data)

//         var nweData = req.body
//         console.log(oldData )
//         console.log(nweData)
//         if (nweData.email==oldData.email) {
//          console.log("email shai ha ya nhi",nweData.email)   
//          console.log("email shai ha ya nhi",oldData.email)  
//          var chegahpassword= await bcrypt .compare(nweData.password,oldData.password)
//             if (chegahpassword) {
//                 oldData.token = jwt.sign({time:Date(),userId:11},"rttrerer")
//                 res.send({
//                                     stauts:true,
//                                     msg:"Login Successfully.",
//                                     data:oldData
//                                  })
//             } else{
//                              res.send({
//                                 status:false,
//                                 msg:"Invalid password given.",
//                                 data:{}
//         })
//         }

//         }else{
//             res.send({
//                              status:false,
//                              msg:"Email does not exist.",
//                              data:{email:nweData.email}
//                           });

//         }
//         res.send([nweData.email,oldData.email])
//     })
// }
// sab see pahle export cerate karena  
//use ka bate token ka pass karena or  password or token ka comper karen 
//ek feli banena use ka aana tere req,body data push karena or token pass karena 
//readfeli me  email ko pass kare ne or use ka aane tere password ka  gala kare    tega ne shai hai ya nhi ha     


export const getdatapass = async (req, res) => {
    var whrer = {}
    if (req.query.email) {
        whrer.email = req.query.email


    }
    if (req.query.username) {
        whrer.username = req.query.username
    }
    //whrer.email="bilalbhati@212.com"
    const data = await User.find(whrer)

    if (data.length > 0) {
        res.send({
            status: true,
            mgs: "user data sahi hai",
            data: data
        })

    } else {
        res.send({
            status: false,
            mgs: "user data sahi nhi hai",
            data: []
        })

    }
    res.send(data)
}

export const upadeta = async (req, res) => {
    //res.send("connected")
    try {
        const datapass = await User.findByIdAndUpdate({ _id: req.params.id }, req.body)
        if (datapass) {
            res.send({
                status: true,
                mgs: "yeh sahi hai ",
                data: datapass
            })

        } else {
            res.send({
                status: false,
                mgs: "yeh sahi nhi ",
                data: {}
            })
        }
    } catch (err) {
        res.send({
            status: false,
            mgs: "yeh sahi nhi hai",
            data: err
        })
    }
}

export const datea = async (req, res) => {
    //res.send("connected")
    try {
        var dataToBeUpdate={}
        dataToBeUpdate.deletedAt
        const datapass = await User.findByIdAndUpdate({ _id: req.params.id },dataToBeUpdate)
        if (datapass) {
            res.send({
                status: true,
                mgs: "yeh sahi hai ",
                data: {}
            })

        } else {
            res.send({
                status: false,
                mgs: "yeh sahi nhi ",
                data: {}
            })
        }
    } catch (err) {
        res.send({
            status: false,
            mgs: "yeh sahi nhi hai",
            data: err
        })
    }
}



export const ResendOtp = async (req, res) => {
    var otp = 12345
    req.body.otp = otp
    var data = await User.findByIdAndUpdate({ _id: req.body.id }, req.body)
    if (data) {
        data.otp = otp
        res.send({
            status: true,
            msg: "right",
            data: data
        })
    } else {
        res.send({
            status: false,
            msg: "worng",
            data: data
        })

    }
}

export const FrogetPassword = async (req, res) => {
    var emailcheck = await User.findOne({ username: req.body.username })
    //  res.send(emailcheck)
    if (emailcheck) {
        var otp = Math.floor(1000 + Math.random() * 9000);
        req.body.otp = otp
        //   console.log(otp)
        const emailpass = await nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: "bilalbhati011@gmail.com",
                // pass: "lchhmdfytgkxcdsv"

            }


        })
        //  console.log(emailpass)
        //  export default emailpass;

        const emailoutpad = {
            from: "bilalbhati011@gmail.com",
            to: "bilalbhati011@gmail.com",
            subject: "For Reset password",
            html: "<P> OTP:" + otp + "</p>"

        }
        // console.log(emailoutpad)
        emailpass.sendMail(emailoutpad, function (err, info) {
            if (err) {
                console.log(err)
            }
            else {
                console.log("eamil has been send", info.response)
            }
        })
    }
    var usernameUpdate = await User.findOneAndUpdate({ username: req.body.username }, req.body)
    usernameUpdate.otp = req.body.otp
    res.send(usernameUpdate)
}



export const verifyotp = async (req, res) => {
    try {

        const otpcheck = await User.findOne({ username: req.body.username, otp: req.body.otp })
        //res.send(otpcheck)

        if (otpcheck) {
            var modelsDataCheck = {}
            modelsDataCheck.isemail_verified = true
            await User.findOneAndUpdate({ username: otpcheck.username }, modelsDataCheck)
            otpcheck.isemail_verified = true
            res.send({
                status: true,
                mgs: "OTP verifed succesfully",
                data: otpcheck
            })
        } else {
            res.send({
                status: false,
                mgs: "Invalid Otp or username no. given.",
                data: {}

            })
        }
    } catch (err) {
        res.send({
            status: false,
            mgs: "Invalid Otp or username no. given..",
            data: err

        })
    }
}


export const Resetpassword = async (req, res) => {
    const checkUser = await User.findOne({ username: req.body.username })
    if (checkUser) {
        var CheCkpass = await bcrypt.compare(req.body.password, checkUser.password)
        if (CheCkpass) {
            var dataToUpdate = {}
            const passowrdHash = await bcrypt.hash(req.body.new_pass, 10)
            dataToUpdate.password = passowrdHash
            await User.findOneAndUpdate({ username: req.body.username }, dataToUpdate)
            res.send({ status: true, mgs: "Password Reset Succesfully", data: checkUser })
        } else {
            res.send({ status: false, mgs: "invalid old password", data: {} })

        }
    } else {
        res.send({ status: false, mgs: "user not found given email" })
    }
}



export const insertBulkUsers = async (req, res) => {
    const jsonArray = await csv().fromFile("coaching_users.csv")
    // const insertDate=await User.insertMany(jsonArray)
    // res.send(insertDate);return;
     var rejected = []
    var success = 0
    jsonArray.forEach(async (value, key) => {
        const pass = await User.findOne({ email: value.email })
        const mobilecheckout = await User.findOne({ mobile: value.mobile })
        if (pass) {
            rejected.push({
                email: value.email,
                reason: "username already exist .",
                key: key + 1
            })
        } else if (mobilecheckout) {
            rejected.push({
                email: value.email,
                mobile: value.mobile,
                reason: "Mobile already exist.",
                key: key + 1
            })
        }
        else {

            var passowrdpass = await bcrypt.hash(value.password, 10)
            //  salt=req.body.passowrd
            //  res.send(salt)  
            value.password = passowrdpass
            var user = await User.create(value)
            if (user) {
                success + 1;

            }

        }
    });
    setTimeout(() =>{
    if (success==0) {
        res.send({
            status:false,
            mgs:"No data inserted .",
            rejected_data:rejected,
            success:success,
        })
    } else {
       res.send({
        staus:false,
        mgs:"Data inserted successfully.",
        rejected_data:rejected,
        success:success,
       }) 
    }
},"1000")

}

// export const ImageUpload=(req,res)=>{
//     var imgBase64=req.body.image;
//     var lowerCase=imgBase64.toLowerCase()
//     var extension=undefined;
//     if (lowerCase.indexof("png")==11) {
//         extension="png"
//         var base64Data=imgBase64.replace(/^data:image\/png:base64,/, "");
//     }
//     else if (lowerCase.indexof("jpg")==11||lowerCase.indexof("jpeg")==11) {
//      extension="jpg"   
//         var base64Data=imgBase64.replace(/^data:image\/jpeg:base64,/, "")

//     }
//     var ImagePath="product_upload"+"/"+Date.now() + "." + extension;
//     fs.writeFile(ImagePath,base64Data,"base64",function (err){
//         console.log("err----",err)
//       if(err){
//          res.send({
//             status:false,
//             msg:"Invalid image uploaded.",
//             data:{},
//          });
//       }else{
//          res.send({
//             status:true,
//             msg:"image uploaded succesfully.",
//             data:ImagePath,
//          });
//       }
//     })
// }

export const ImageUpload = async (req, res) => {
    var imgBase64 = req.body.image;
    var lowerCase = imgBase64.toLowerCase();
    var extension = undefined;
    if (lowerCase.indexOf("png") == 11) {
        extension = "png"
        var base64Data = imgBase64.replace(/^data:image\/png;base64,/, "");
    }
    else if (lowerCase.indexOf("jpg") == 11 || lowerCase.indexOf("jpeg") == 11) {
        extension = "jpg"
        var base64Data = imgBase64.replace(/^data:image\/jpeg;base64,/, "");
    }
    var ImagePath = "product_upload" + "/" + Date.now() + "." + extension;
    fs.writeFile(ImagePath, base64Data, 'base64', function (err) {
        console.log("err----", err)
        if (err) {
            res.send({
                status: false,
                msg: "Invalid image uploaded.",
                data: {},
            });
        } else {
            res.send({
                status: true,
                msg: "image uploaded succesfully.",
                data: ImagePath,
            });
        }
    });
}





















// export const FrogetPassword = async (req, res) => {
//     try {
//         var email = req.body.email;
//         var userData = await User.findOne({ email: email })
//         if (userData) {
//             var RandomString = randomstring.generate();
//             var data = await User.updateOne({ email: email }, { $set: { token: RandomString } })
//             // res.send(data)
//             // return
//             mail(userData.name, userData.email, RandomString)
//             // res.send()
//             // return
//             res.send({
//                 status: true,
//                 mgs: "Please check your inbox of mailand reset your password.",

//             })
//         } else {
//             res.send({
//                 status: true,
//                 mgs: "this email does not exists ."
//             })
//         }

//     } catch (err) {
//         res.send({
//             status: false,
//             mgs: err.message
//         })
//     }
// }



// export const Resetpassword = async (req, res) => {
//     try {
//         var token = req.query.token
//         var tokenPass = await User.findOne({ token: token })
//         if (tokenPass) {
//             var password = req.body.password;
//             var newpassword = await (password)
//             var userdata = await User.findByIdAndUpdate({ _id: tokenPass._id }, { $set: { password: newpassword, token: '' } }, { new: true });
//             res.send({ status: true, mgs: "usen passwor has been reset", data: userdata })
//         } else {
//             res.send({
//                 status: true,
//                 mgs: "this link has been expired."
//             })
//         }

//     } catch (error) {
//         res.send({
//             status: false,
//             mgs: error.message

//         })
//     }
// }