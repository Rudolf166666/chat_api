import { Router } from "express";
import controllers from "../../controllers/index.js";


const router=new Router()

router.post("/",controllers.cryptocurrencyControllers.post)
router.get("/",controllers.cryptocurrencyControllers.get)

export default router