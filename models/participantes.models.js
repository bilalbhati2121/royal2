import mongoose from "mongoose";
export const participantes= new mongoose.Schema({
    room_id:{
        type:String,
        requierd:true
    },
    user_id:{
        type:String,
        requierd:true
    },
    status:{
        type: String, enum: ["Active", "Deactive"],
        default: "Active"
    },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
})
export const Participantes= mongoose.model("participantes",participantes)