import { Router } from "express";
import controllers from "../../controllers/index.js";


const router=new Router()

router.get("/",controllers.tokenController.get)

export default router