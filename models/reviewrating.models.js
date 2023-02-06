import mongoose from "mongoose";
const ReviewRatingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: "users",
        requierd: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId, ref: "products"
    },
    rating: {
        type: Number,
        enum: [1, 2, 3, 4, 5],
        requierd: true
    },
    review: {
        type: String

    },
    status: {
        type: String,
        enum: ["Active", "Deactive"],
        default: "Active"
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})
const ReviewRating = mongoose.model(" ReviewRating", ReviewRatingSchema)
export default ReviewRating;