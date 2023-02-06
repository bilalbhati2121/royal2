import { subcategoryl, sub_categorylogin, sub_categoryupadeta, sub_categorydelete, GetAll } from "../controller/sub_category.controller.js"
import Express from "express"
export const owais = Express.Router()
owais.route("/sub_categoryaapi").get(subcategoryl)
owais.route("/sub_categorylogin").post(sub_categorylogin)
owais.route("/sub_categoryupadeta").post(sub_categoryupadeta)
owais.route("/sub_categorydelete").patch(sub_categorydelete)
owais.route("/Get/list").post(GetAll)

export default owais;