import { Router } from "express";
import { MakeUser } from './Factories/MakeUser.js'
import { MakeAuth } from "./Factories/MakeAuth.js";
import { MakeDealership } from "./Factories/MakeDealership.js";
import { MakeRent } from "./Factories/MakeRent.js";
import { AuthMiddleware } from './app/Middlewares/AuthMiddleware.js'


const router = Router()
const userController = MakeUser.getInstance()
const authController = MakeAuth.getInstance()
const DealershipControllers = MakeDealership.getInstance()
const RentControllers = MakeRent.getInstance()


//register users
router.post("/register", userController.CreateController.bind(userController))

//register dealership
router.post("/dealership", DealershipControllers.CreateController.bind(DealershipControllers))

//login with authentication
router.post("/login", authController.LoginController.bind(authController))
//search dealership by Location
router.get("/location/:address", DealershipControllers.findByLocation.bind(DealershipControllers))

//list all deakerships
router.get("/dealership", DealershipControllers.findAll.bind(DealershipControllers))


// Tudo que estiver abaixo do "use"
// está utilizando o middleware "AuthMiddleware.handler"
router.use(AuthMiddleware.handler)


//register rent
router.post("/rent", RentControllers.RentController.bind(RentControllers))
//cancel rent
router.post("/rent/cancel/:id", RentControllers.CancelRent.bind(RentControllers))

//search dealership by id
router.get("/dealership/:id", DealershipControllers.findById.bind(DealershipControllers))

//list all users    
router.get("/userscars", userController.findAll.bind(userController))
//list rent by user id
router.get("/userscars/:id", userController.findByRentByid.bind(userController))
export { router }