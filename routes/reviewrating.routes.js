import { Cerate, getreviewrating, getAllrating } from "../controller/reviewrating.controller.js"
import Express from "express"
export const reviewrating = Express.Router()
reviewrating.route("/reviewrating/cerate").get(Cerate)
reviewrating.route("/reviewrating/get/:pid").put(getreviewrating)
reviewrating.route("/reviewrating/getAllrating").put(getAllrating)
export default reviewrating;