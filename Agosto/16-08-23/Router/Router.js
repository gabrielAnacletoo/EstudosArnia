import { Router } from 'express';
import { MakeCars } from '../Factory/DealerShipFactory.js';
import { initializeDatabase } from '../DataBase/DataBaseConfig.js';

const router = Router();
const { collection, client } = initializeDatabase();
const controller = MakeCars.getInstance(collection);

router.post("/inventory", controller.CreateController.bind(controller));
router.get("/cars", controller.ListAllCarsController.bind(controller));
router.patch("/cars/:id", controller.UpdateCarController.bind(controller));
router.get("/findcar/:LicensePlate", controller.FindPlateController.bind(controller));
router.get("/sold/", controller.CarsSoldController.bind(controller));


export { router }