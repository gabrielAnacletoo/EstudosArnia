import {Router} from "express";

import { MakeInventory } from "../factory/MakeInventory.js";
import { initializeDatabase } from "../database/DataBase.js";

const router = Router();
const { collection } = initializeDatabase();
const controller = MakeInventory.getInstance(collection)

router.post("/items", controller.CreateController.bind(controller))

export {router}