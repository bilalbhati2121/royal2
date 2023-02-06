import { fatest, bhati, bilal, apple } from "../controller/bb.controller.js"
import Express from "express"

export const router = Express.Router()
router.route("/fsgfht").get(fatest)
router.route("/pixel").post(bhati)
router.route("/test/create").put(bilal)
router.route("/reeyfey").put(apple)

export default router;