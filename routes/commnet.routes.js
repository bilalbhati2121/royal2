import {  CommnetCertae ,commnetall} from "../controller/commnet.controller.js";
import  Express  from "express";
export const commnetroutes=Express.Router()
 commnetroutes.route("/Commnet/Certae").get(CommnetCertae)
 commnetroutes.route("/Commnet/list").get(commnetall)
 export default commnetroutes;
