import { AppointmentService } from '../Service/AppointmentsService';
import { Request, Response } from 'express';

class AppointmentController {
  constructor(private service: AppointmentService) {}

  async CreateController(req: Request, res: Response) {
    const { appointmentdate, appointmenttime, ClinicId, DoctorId } = req.body
    const token = req.headers.authorization;
    if(!token){
      return {error: 'Token not found', status: 401}
    }
    const Appointment = {
      appointmentdate,
      appointmenttime,
      token,
      ClinicId,
      DoctorId
    }
    const result = await this.service.CreateAppointment(Appointment);
    return res.status(201).json(result);
  }

}

export { AppointmentController };
