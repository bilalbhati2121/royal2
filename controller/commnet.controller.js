import commnet from "../models/commnet.models.js";
export const CommnetCertae=async(req,res)=>{
const commmnetone=await commnet.findOne({Commnet:req.body.Commnet})
if (commmnetone) {
    res.send({
        status:false,
        mgs:"commnet already exist.",
        data:{}
    })
}

const commnetsCreate=await commnet.create(req.body)
res.send(commnetsCreate)
}
export const commnetall=async(req,res)=>{
const getall=await commnet.find({status:"Active"}).populate("Post_id")
res.send(getall)

}