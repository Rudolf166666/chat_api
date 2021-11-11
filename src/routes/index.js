import { Router } from "express";
import { ROUTES } from "../constants/routes/index.js";
import authRouter from "./authRouter/index.js"
import tokenRouter from "./tokenRoute/index.js"
import cryptocurrenciesRoute from "./cryptocurrency/index.js"
const router=new Router()

router.use(ROUTES.AUTH,authRouter)
router.use(ROUTES.TOKEN,tokenRouter)
router.use(ROUTES.CRYPTOCURRENCIES,cryptocurrenciesRoute)

export default router