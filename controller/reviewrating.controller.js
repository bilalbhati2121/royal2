import ReviewRating from "../models/reviewrating.models.js";
export const Cerate = async (req, res) => {
    // res.send("jdjd")
    try {
        req.body.userId = req.body.user_Id
        req.body.productId = req.body.product_Id
        const IsratingExist = await ReviewRating.findOne({ userId: req.body.userId, productId: req.body.productId })
        if (IsratingExist) {
            res.send({
                status: false,
                mgs: "yeh sahi hai",
                data: {}
            })
        }
        const ReviewRatingCerate = await ReviewRating.create(req.body)
        if (ReviewRatingCerate) {
            res.send({
                ststus: true,
                mgs: "syeh sahi hai ",
                data: ReviewRatingCerate
            })
        } else {
            res.send({
                ststus: false,
                mgs: "something wrong with req",
                data: {}
            })
        }
    } catch (ckk) {
        res.send({
            ststus: false,
            mgs: "something wrong with req .",
            data: ckk
        })
        console.log(ckk)
    }
    // console.log(ckk)
}

export const getreviewrating = async (req, res) => {
    // res.send("yeh")
    const data = await ReviewRating.find({ productId: req.params.pid }).populate("userId")
    if (data.length > 0) {
        res.send({
            status: true,
            mgs: "yeh sahi hai",
            data: data
        })
    } else {
        res.send({
            status: false,
            mgs: "yeh sahi nhi hai",
            data: {}
        })
    }
}

export const getAllrating = async (req, res) => {
    try {
        var data = {}
        if (req.query.rating) {
            data.rating = req.query.rating
        }
        if (req.query.productId) {
            data.rating = req.query.productId
        }
        const rating = await ReviewRating.find(data)
        res.send(rating)
    } catch (err) {
        res.send({
            status: false,
            mgs: "yeh sahi nhi hai",
            data: err
        })
    }
}
