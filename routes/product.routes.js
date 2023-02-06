import { create, GETall } from "../controller/product.controller.js"
import { imageUpload } from "../services/image.services.js"
import Express from "express"
export const royal = Express.Router()
royal.route("/Product/Cerate").get(imageUpload.array('product_upload'),create)   
royal.route("/Product/list/:SubCateId").get(GETall)   
// royal.route("/Product/search/:regex").get(search)   

export default royal;   