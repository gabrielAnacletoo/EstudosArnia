import { Router } from "express";
import { MakeBlog } from "../Factory/BlogFactory.js";
import { initializeDatabase } from "../DataBase/DataBase.js";

const router = Router();
const { collection, client } = initializeDatabase();
const controller = MakeBlog.getInstance(collection);

router.post("/posts", controller.CreateController.bind(controller))  
router.patch("/posts/:id/like", controller.LikesController.bind(controller)) 
router.get("/posts", controller.ListAllController.bind(controller))  
router.get("/authors/:author", controller.SearchController.bind(controller))  
router.patch("/posts/:id/delete", controller.DeleteController.bind(controller))  
router.get("/posts/deleted", controller.DeletedController.bind(controller))  


export { router }