import mongoose from "mongoose";

export const messages=new mongoose.Schema({
    message:{
        type:String,
        required:true
    },
    sender_id:{
        type:String,
        required:true 
    },
    is_deleted:{
        type: Number, enum: [0, 1],
        default: 0   
    },
    is_edit:{
        type: Number, enum: [0, 1],
        default: 0
    },
    status:{
        type: String, enum: ["Active", "Deactive"],
        default: "Active"
    },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
})
export const Messages= mongoose.model("messages",messages)
export default Messages;