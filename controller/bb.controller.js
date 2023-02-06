import jwt from "jsonwebtoken"
export const  bilal=(req,res)=>{
 
    var data ={
        time:Date(),
        usreid:16,
        passwored:"rr4567"
    }
    const token =jwt.sign(data,"classdata")
    const decoded = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiU2F0IFNlcCAyNCAyMDIyIDIzOjMxOjQ2IEdNVCswNTMwIChJbmRpYSBTdGFuZGFyZCBUaW1lKSIsInVzcmVpZCI6MTYsInBhc3N3b3JlZCI6InJyNDU2NyIsImlhdCI6MTY2NDA0MjUwNn0.pSDq2tnz6jbkDV3JRvaTl3ZgvZstOa1LZO-LI9t4ocI","classdata")
    res.send({
        "token":token,
        "decoded":decoded
    })
          

    
}


