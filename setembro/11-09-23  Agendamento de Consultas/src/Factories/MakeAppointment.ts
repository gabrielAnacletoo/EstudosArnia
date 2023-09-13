import { AppointmentController } from "../App/Appointments/Controller/AppointmentsController";
import { AppointmentRepository } from "../App/Appointments/Repository/AppointmentsRepository";
import { AppointmentService } from "../App/Appointments/Service/AppointmentsService";
import { UserRepository } from "../App/Users/Repository/UserRepository";
import { ClinicRepository } from "../App/Clinics/Repository/ClinicRepository";
import { DoctorRepository } from "../App/Doctors/Repository/DoctorRepository";
import { Appointment } from "../Domain/Appointment";
import { User } from '../Domain/User'
import { Clinic } from "../Domain/Clinic";
import { Doctor } from "../Domain/Doctor";

class MakeAppointment {
  static getInstance() {
    const UserAppointment = new UserRepository(User)
    const DoctorAppointment = new DoctorRepository(Doctor)
    const ClinicAppointment = new ClinicRepository(Clinic)
    const RepostoryAppointment = new AppointmentRepository(Appointment)
    
    const Service = new AppointmentService(UserAppointment,DoctorAppointment,ClinicAppointment,RepostoryAppointment );
    const Controller = new AppointmentController(Service);
    return Controller;
  }
}

export { MakeAppointment };
