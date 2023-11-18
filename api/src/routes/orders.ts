import { Router } from "express";
import { Request, Response } from "express";
import { getOrders } from "../controllers/order";
import { checkJwt } from "../middleware/session";

const router = Router();


router.get('/', checkJwt, getOrders)

export { router };