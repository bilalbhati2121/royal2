import mongoose from "mongoose";
const Commnet= new mongoose.Schema({
    Commnet:{
        type:String,
        required:true

    },
    Post_id:{
        type: mongoose.Schema.Types.ObjectId, ref: 'products' 
    },
    Commnetby:{
        type:String,
        requierd:false
    },
    status:{
        type:String,
        enum:["Active","Inactive"],
        default:"Active"
    },
    created:
    {
        type: Date,
        default: Date.now
    },
    updated:
    {
        type: Date,
        default: Date.now
    }
})
const commnet=mongoose.model("Commnets",Commnet)
export default commnet;