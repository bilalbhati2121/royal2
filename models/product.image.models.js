import mongoose from "mongoose";
const ProductImages= new mongoose.Schema({
    path:{
        type:String,
        requierd:true
    },
    fullpath:{
        type:String,
        requierd:true
    },
    type:{
        type:String,
        requierd:true
    },
    status:{
        type:String,
        enum:["Active","Deactive"],
        default:"Active"
    },
    createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
})
export default ProductImages;