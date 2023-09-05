import {Router} from "express";
import { MakeRifas } from "./factories/rifafactory.js";


const router = Router();
const controller = MakeRifas.getInstance()

router.post("/rifas", controller.CreateController.bind(controller))
router.get("/rifas/drawn/:id", controller.GeneratedControler.bind(controller))
router.get("/listrifas", controller.ListController.bind(controller))
router.get("/rifas/values/:id", controller.Valuecontroller.bind(controller))

export {router}