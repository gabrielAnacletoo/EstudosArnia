import { Router } from "express";
import { MakeUser } from './Factories/MakeUser'
import { MakeDoctor } from "./Factories/MakeDoctor";
import { MakeClinic } from "./Factories/MakeClinic";
import { MakeAppointment } from "./Factories/MakeAppointment";
import { MakeAuth } from "./Factories/MakeAuth";
const router = Router()
const userController = MakeUser.getInstance()
const DoctorController = MakeDoctor.getInstance()
const ClinicController = MakeClinic.getInstance()
const AppointmentController = MakeAppointment.getInstance()
const AuthController = MakeAuth.getInstance()
import { AuthMiddleware } from "./Middlewares/AuthMiddleware";

//list all
router.get("/list/users", userController.FindAll.bind(userController))
router.get("/list/appointments/:id", userController.FindAppointment.bind(userController))
router.get("/list/doctors", DoctorController.FindAll.bind(DoctorController))
router.get("/list/clinics", ClinicController.FindAll.bind(ClinicController))

//register
router.post("/register/users", userController.CreateController.bind(userController))
router.post("/register/doctors", DoctorController.CreateController.bind(DoctorController))
router.post("/register/clinics", ClinicController.CreateController.bind(ClinicController))

//login
router.get("/auth", AuthController.LoginController.bind(AuthController))



router.use(AuthMiddleware.handler)
//Services
router.post("/register/appointment", AppointmentController.CreateController.bind(AppointmentController)) 

//search
router.get("/doctors/:specialty", DoctorController.FindBySpecialty.bind(DoctorController))
router.get("/clinics/:location", ClinicController.FindByLocation.bind(ClinicController))
// router.get("/doctors/:id", DoctorController.FindById.bind(DoctorController))
export { router }