import subcategory from "../models/sub_category.models.js"

export const subcategoryl = async (req, res) => {
    try {
        const shakir = await subcategory.findOne({ name: req.body.name })
        if (shakir) {
            res.send({
                status: false,
                mgs: "Sub Category already exist.",
                data: {}
            })
            return;
        }
        const sub_categorypass = await subcategory.create(req.body)
        res.send(sub_categorypass)
        // if (sub_categorypass) {
        //     res.send({
        //         status: true,
        //         mgs: "yeh sub_category sahi hai",
        //         data: sub_categorypass
        //     })
        // } else {
        //     res.send({
        //         status: false,
        //         mgs: "yeh sub_category sahi nhi hai",
        //         data: {}
        //     })
        // }

    }
    catch (err) {
        res.send({
            status: false,
            mgs: "Something wrong with request.",
            data: err
        })
    }
}

export const sub_categorylogin = async (req, res) => {

    // res.send("yes ")
    try {
        const categorydata = await subcategory.find({ status: "inactive" }).populate("cateId").populate("createdby")
        if (categorydata) {
            res.send({
                status: true,
                mgs: "yeh sub_categorylonig sahi  hai",
                data: categorydata
            })
        } else {
            res.send({
                status: false,
                mgs: "yeh sub_categorylonig sahi nhi haiw",
                data: {}
            })
        }
    } catch (ck) {
        res.send({
            status: false,
            mgs: "yeh sahi nhi haiii",
            data: ck
        })
    }
}

export const sub_categoryupadeta = async (req, res) => {
    // res.send("rteuu")
    const upadeta = await subcategory.findByIdAndUpdate({ _id: req.body._id }, req.body)
    if (upadeta) {
        res.send({
            status: true,
            mgs: "yeh sub_categoryupadeta sahi hai",
            data: upadeta
        })
    } else {
        res.send({
            status: false,
            mgs: "yeh sub_categoryupadeta sahi nhi hai",
            data: {}
        })
    }
}
export const sub_categorydelete = async (req, res) => {
    const deletedata = await subcategory.findByIdAndDelete({ _id: req.body._id })
    if (deletedata) {
        res.send({
            status: true,
            mgs: "yeh sub_categorydelete hou kya",
            data: deletedata

        })
    } else {
        res.send({
            status: false,
            mgs: "yeh sub_categorydelete nhi hou kya",
            data: {}

        })
    }
}


export const GetAll = async (req, res) => {
    try {
        const datalist = await subcategory.find({ status: "Active" }).populate("cateId").populate("createdby")
        if (datalist) {
            res.send({
                sattus: true,
                mgs: "Data fetch successsfiully.",
                data: datalist
            })

        } else {
            res.send({
                status: false,
                mgs: "SOmething wrong with request.",
                data: []
            })
        }
    } catch (err) {
        res.send({
            status: false,
            mgs: "SOmething wrong with request.",
            data: err
        })

    }
}