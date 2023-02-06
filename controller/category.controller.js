import category from "../models/category.models.js"
export const categoryprodouct = async (req, res) => {
   try {
      const categoryvalue = await category.findOne({ name: req.body.name })
      if (categoryvalue) {
         res.send({
            status: false,
            mgs: "Category already exist",
            data: {}
         })
         return;
      }
      var categorydata = await category.create(req.body)
      res.send(categorydata)
      // res.send()
      // if (categorydata) {
      //    res.send({
      //       status: true,
      //       mgs: "SOmething wrong with request",
      //       data: categorydata
      //    })
      // } else {
      //    res.send({
      //       status: false,
      //       mgs: "yeh category sahi nhi hai",
      //       data: {}
      //    })
      // }
   } catch (err) {
      res.send({
         status: false,
         mgs: "yeh category sahi nhi hai",
         data: err
      })
   }
}
export const loingcategory = async (req, res) => {
   var datapass = await category.findOne({ status: "active" })
   if (datapass) {
      res.send({
         status: true,
         mgs: "yeh category sahi nhi hai",
         data: datapass
      })
   } else {
      res.send({
         status: false,
         mgs: "yeh category sahi nhi hai",
         data: {}
      })
   }
}
// export const upadeta = async (req, res) => {
//    var upadetapass = await category.findByIdAndUpdate({ _id: req.body._id }, req.body)
//    // res.send("dfdg")
//    if (upadetapass) {
//       res.send({
//          status: true,
//          mgs: "yeh upadeta sahi nhi hai",
//          data: upadetapass
//       })
//    } else {
//       res.send({
//          status: false,
//          mgs: "yeh upadeta sahi nhi hai",
//          data: {}
//       })
//    }
// }
// export const deletee = async (req, res) => {
//    var onesidedalete = {};
//    onesidedalete.deleteAt = 0;
//    const deleteekarene = await category.findByIdAndUpdate({ _id: req.body._id }, onesidedalete)
//    if (deleteekarene) {
//       res.send({
//          status: true,
//          mgs: "yeh  nhi hai",
//          data: {}
//       })
//    } else {
//       res.send({
//          staus: false,
//          mgs: "yeh shai   hai",
//          data: {}
//       })
//    }
// }


export const GetAll = async (req, res) => {
   try {
      const data = await category.find({ status: "active" ,deleteAt: false });
      if (data) {
         res.send({
            status: true,
            msg: "Data fetch successsfiully.",
            data: data
         })
      } else {
         res.send({
            status: false,
            msg: "Categories not found.",
            data: []
         })
      }
   } catch (err) {
      res.send({
         status: false,
         msg: "SOmething wrong with request.",
         data: err
      })
   }
}



export const deletee = async (req, res) => {
   try {
      var dataToBeUpdate = {};
      dataToBeUpdate.deleteAt = 1;
      const data = await category.findByIdAndUpdate({ _id: req.body._id }, dataToBeUpdate)

      if (data) {
         res.send({
            status: true,
            msg: "Deleted successfully.",
            data: {}
         })
      } else {
         res.send({
            status: false,
            msg: "data found with given id",
            data: {}
         })
      }
   } catch (err) {
      res.send({
         status: false,
         msg: "Something wrong with request.",
         data: err
      })
   }
}



export const GetDataByAgrigate=async(req,res)=>{
   const data=await category.aggregate([
      {
         "$lookup":{
            "from":"sub_categories",
            "localField":"_id",
            "foreignField":"cateId",
            "as":"subcategories"
         }
      }
   ])
   res.send(data)
}