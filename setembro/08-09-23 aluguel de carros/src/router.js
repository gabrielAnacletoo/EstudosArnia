import { Router } from "express";
import { MakeUser } from './Factories/MakeUser.js'
import { MakeAuth } from "./Factories/MakeAuth.js";
import { MakeHotels } from "./Factories/MakeHotels.js";
import { MakeReserve } from "./Factories/MakeReserve.js";
import { AuthMiddleware } from './app/Middlewares/AuthMiddleware.js'


const router = Router()
const userController = MakeUser.getInstance()
const authController = MakeAuth.getInstance()
const HotelsController = MakeHotels.getInstance()
const ReserveController = MakeReserve.getInstance()


//register users
router.post("/register", userController.CreateController.bind(userController))

//register hotel
router.post("/hotel", HotelsController.CreateController.bind(HotelsController))

//login with authentication
router.post("/login", authController.LoginController.bind(authController))


// Tudo que estiver abaixo do "use"
// está utilizando o middleware "AuthMiddleware.handler"
router.use(AuthMiddleware.handler)
//register reserve
router.post("/reserve", ReserveController.ReserveController.bind(ReserveController))
router.delete("/reserve/cancel/:ReserveId", ReserveController.CancelReserve.bind(ReserveController))
//list all hotels
router.get("/hotel", HotelsController.findAll.bind(HotelsController))
//search hotel by id
router.get("/hotel/:id", HotelsController.findById.bind(HotelsController))
//search hotel by Location
router.get("/location/:address", HotelsController.findByLocation.bind(HotelsController))
//list all users
router.get("/users", userController.findAll.bind(userController))
//list reserve by user id
router.get("/users/:id", userController.findByReserversByid.bind(userController))
export { router }