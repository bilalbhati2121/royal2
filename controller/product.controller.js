import Product from "../models/product.models.js";
export const create = async(req,res) => {
    // try{
    var allImages = [];
        req.files.forEach(image => {
           var imageType = '';
            if(image.mimetype == 'image/png'){
                imageType = 'png';
            }else if(image.mimetype == 'image/jpg' || image.mimetype == 'image/jpeg'){
                imageType = 'jpg';
            }
            let imageData = {
                path:image.filename,
                fullpath:"localhost:3002/"+image.path,
                type:imageType,
            }
               allImages.push(imageData)
        });
        req.body.images = allImages
    const createProd = await Product.create(req.body);
    if(createProd){
        
    }
    res.send(createProd);
// }catch(err){
//     res.send({
//         status:false,
//         msg:"Something wrong with request.",
//         data:err
//     });
// }
} 

  
export const GETall= async(req,res)=>{
    // try{
    var data= {status:"Active",sub_cate_id:req.params.SubCateId}
           // if(req.query.search){
        //     where.name = req.query.search;
        // }
    const alldata= await Product.find(data)
    if (alldata.length>0) {
        res.send({
            status:true,
            msg:"Data fetch successsfiully.",
            data:alldata
         })
    } else {
        res.send({
            status:false,
            msg:"Product not found.",
            data:[]
         })
      }
    // }catch(err){
    //     res.send({
    //         status:false,
    //         msg:"Product not found.",
    //         data:err
    //     })
    // }
    }
    












































// export const Create = async (req,res) => {
//     var allData=[];
//     // console.log("allImages-------",allImages);
//     req.files.forEach(image => {
//         console.log("image-------",req.files);
//         var imageType='';
//         if (image.mimetype == 'image/png') {
//             imageType='png';
//         }else if (image.mimetype == 'image/jpg '|| image.mimetype == 'image/jpeg') {
//             imageType ='jpg'
//         }
//         let imagedata={
//             path:image.filename,
//             fullpath:"localhost:3002/"+image.path,
//             type:imageType
//         }
// // console.log(imageType);
//         allData.push(imagedata)
//         // console.log("allImages----------",allImages);
//     });
//     req.body.images=allImages
//     // console.log(allImages);
//     const createProd =await Product.create(req.body)
//     if (createProd) {
        
//     }
// res.send(createProd)
// }









// //    try{
//     var allImages = [];
//     req.files.forEach(image => {
//        var imageType = '';
//         if(image.mimetype == 'image/png'){
//             imageType = 'png';
//         }else if(image.mimetype == 'image/jpg' || image.mimetype == 'image/jpeg'){
//             imageType = 'jpg';
//         }
//         let imageData = {
//             path:image.filename,
//             fullpath:"localhost:3002/"+image.path,
//             type:imageType,
//         }
//            allImages.push(imageData)
//     });
//     req.body.images = allImages
// const createProd = await Product.create(req.body);
// if(createProd){
    
// }
// res.send(createProd);
// }catch(err){
// res.send({
//     status:false,
//     msg:"Something wrong with request.",
//     data:err
// });
// }

// }
//   // try {
//     var allImages = [];
//         req.files.forEach((image,key) => {
//           // console.log(image);
//            var imageType = '';
//             if(image.mimetype == 'image/png'){
//                 imageType = 'png';
//             }else if(image.mimetype == 'image/jpg' || image.mimetype == 'image/jpeg'){
//                 imageType = 'jpg';
//             }
//             let imageData = {
//                 path:image.filename,
//                 fullpath:"localhost:3002/"+image.path,
//                 type:imageType,
//             }
//                allImages.push(imageData)
//         });
//         // console.log(allImages)
//         req.body.images = allImages
//     const createProd = await Product.create(req.body);
//     if(createProd){
        
//     }
//     res.send(createProd);
//     // console.log("hdhfhhd")
//   // } catch (err) {
//   //   res.send({
//   //     status: false,
//   //     msg: "something wrong with req.",
//   //     data: err
//   //   })
//   // }
// }

// export const search = async (req, res) => {
// // res.send("dddd");return
//     const sear = await Product.find(
//         {
//             "$or": [
//                 { "name": { $regex: req.params.key } },
//                // { "status": { $regex: req.params.key } },
//             ]
//         }
//     )
//     res.send(sear)
//     console.log(sear)
// }