import mongoose from "mongoose";
const categoryprodouct = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active"
    },
    deleteAt:{
        type:Boolean,
        default:0
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
const datapass = mongoose.model("categories", categoryprodouct)
export default datapass;


