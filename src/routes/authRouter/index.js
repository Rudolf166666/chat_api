import { Router } from "express";
import controllers from "../../controllers/index.js";


const router=new Router()

router.post("/",controllers.authController.post)

export default router