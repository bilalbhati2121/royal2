import mongoose from "mongoose";
export const room = new mongoose.Schema({
    room_name:{
        type:String,
        required:true
    },
    room_type:{
        type:String,
        required:true
    },
    status:{
        type: String, enum: ["Active", "Deactive"],
        default: "Active"
    },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
})
export const Room= mongoose.model("rooms",room);
export default Room;