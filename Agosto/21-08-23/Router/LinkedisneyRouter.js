import { Router } from "express";
import { MakeLinkedisney } from "../Factory/LinkedisneyFactory.js";
import { initializeDatabase } from "../DataBase/LinkedisneyDataBase.js";

const router = Router();
const { collection, client } = initializeDatabase();
const controller = MakeLinkedisney.getInstance(collection);

router.post("/profiles", controller.CreateController.bind(controller))  
router.patch("/profiles/status/:id", controller.EditController.bind(controller))  
router.get("/profiles/deleted", controller.ListAllDeletedController.bind(controller))  
router.get("/profiles/:id/deleted", controller.DeleteController.bind(controller))  
router.get("/profiles", controller.ListAllController.bind(controller))  



export { router }