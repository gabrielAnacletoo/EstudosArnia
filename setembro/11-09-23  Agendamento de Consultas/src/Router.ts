import { Router } from "express";
import { MakeUser } from './Factories/MakeUser'
import { MakeDoctor } from "./Factories/MakeDoctor";
import { MakeClinic } from "./Factories/MakeClinic";
import { MakeAppointment } from "./Factories/MakeAppointment";

const router = Router()
const userController = MakeUser.getInstance()
const DoctorController = MakeDoctor.getInstance()
const ClinicController = MakeClinic.getInstance()
const AppointmentController = MakeAppointment.getInstance()


//login

//list all
router.get("/list/users", userController.findAll.bind(userController))
router.get("/list/doctors", DoctorController.findAll.bind(DoctorController))
router.get("/list/clinics", ClinicController.findAll.bind(ClinicController))

//register
router.post("/register/users", userController.CreateController.bind(userController))
router.post("/register/doctors", DoctorController.CreateController.bind(DoctorController))
router.post("/register/clinics", ClinicController.CreateController.bind(ClinicController))
router.post("/register/appointment", AppointmentController.CreateController.bind(AppointmentController))   
export { router }