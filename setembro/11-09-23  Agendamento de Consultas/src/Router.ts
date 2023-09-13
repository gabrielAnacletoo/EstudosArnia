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

router.post("/register", userController.CreateController.bind(userController))
router.post("/doctors", DoctorController.CreateController.bind(DoctorController))
router.post("/clinics", ClinicController.CreateController.bind(ClinicController))
router.post("/appointment", AppointmentController.CreateController.bind(AppointmentController))   
export { router }