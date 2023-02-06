import {bhati,bilal,school,login,signup,getdatapass,upadeta,datea,ResendOtp,FrogetPassword,verifyotp,Resetpassword,insertBulkUsers,ImageUpload} from "../controller/user.controller.js"
import { authentication } from "../middleware/authentication.js"
import {ExcelUpload} from "../services/image.services.js"
import Express from "express"

export const inesf = Express.Router()
inesf.route("/pixel").get(bhati)
inesf.route("/coching").put(bilal)
inesf.route("/dgfgf").put(school)
inesf.route("/user/login").post(login)
inesf.route("/user/singup").get(signup)
inesf.route("/getaai").get(authentication, getdatapass)
inesf.route("/upatedadata/:id").put(authentication, upadeta)
inesf.route("/delete/:id").post(authentication, datea)
inesf.route("/delete/:id").post(authentication, datea)
inesf.route("/olppass").post(ResendOtp)
inesf.route("/FrogetPassword").post(FrogetPassword)
 inesf.route("/verify/otp").post(verifyotp)
 inesf.route("/reset/password").get(Resetpassword)
 inesf.route("/user/cereat").post(ExcelUpload.single("excel_data"),insertBulkUsers)
inesf.route("/ImageUpload").post(ImageUpload)
export default inesf;
