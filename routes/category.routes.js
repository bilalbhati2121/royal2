import { categoryprodouct, loingcategory,deletee,GetAll ,GetDataByAgrigate} from "../controller/category.controller.js"
import Express from "express";
export const bhati = Express.Router()
bhati.route("/categorydata").get(categoryprodouct)
bhati.route("/datapass").post(loingcategory)
// bhati.route("/upadetaaapi").post(upadeta)
bhati.route("/deleteeaapi").post(deletee)
bhati.route("/GetAll").post(GetAll)
bhati.route("/category/list-test").get(GetDataByAgrigate)
export default bhati;