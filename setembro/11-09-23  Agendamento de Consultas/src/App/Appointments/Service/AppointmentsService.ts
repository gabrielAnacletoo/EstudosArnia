import JWT from "jsonwebtoken";
import moment from "moment";
import { UserRepository } from "../../Users/Repository/UserRepository";
import { DoctorRepository } from "../../Doctors/Repository/DoctorRepository";
import { ClinicRepository } from "../../Clinics/Repository/ClinicRepository";
import { AppointmentRepository } from "../Repository/AppointmentsRepository";

class AppointmentService {
    constructor(
        private userRepository: UserRepository,
        private doctorRepository: DoctorRepository,
        private clinicRepository: ClinicRepository,
        private appointmentRepository: AppointmentRepository
    ) {}

    async CreateAppointment(Appointment: AppointmentData) {
        const { appointmentdate, appointmenttime, token, ClinicId, DoctorId } = Appointment;
        const compareData = Appointment;
        const [, tokenNovo] = token.split(" ");
        const decoded: any = JWT.decode(tokenNovo);
        const { _id, email } = decoded._doc;
   
        try {
            // Verifica se o usuário existe
            const user = await this.userRepository.FindById(_id);

            if (!user) {
                return { error: 'User not found', status: 404 };
            }

            const userIdString = user._id.toString(); // convertendo apenas para string

            // Verifica se a clínica existe
            const clinic = await this.clinicRepository.FindById(ClinicId);
            if (!clinic) {
                return { error: 'Clinic not found', status: 404 };
            }

            // Formatando as datas para o formato certo (DD/MM/YYYY)
            const DateAppointment = moment(appointmentdate, 'DD/MM/YYYY', true);
            const HourAppointment = moment(appointmenttime, 'HH:mm', true).format('HH:mm');
            // Verificando se as datas estão no formato correto
            if (!DateAppointment.isValid()) {
                return { error: 'The date must be in the format "DD/MM/YYYY" and time in "HH:mm"', status: 400 };
            }

            // Verifique se o check-in é posterior ou igual à data atual
            const currentDate = moment();
            if (DateAppointment.isSameOrAfter(currentDate)) {
                // Verifica se o médico existe
                const doctor = await this.doctorRepository.FindById(DoctorId);
                if (!doctor) {
                    return { error: 'Doctor not found', status: 404 };
                } 

                const AppointmentData = {
                    user: userIdString,
                    doctor: DoctorId,
                    clinic: ClinicId,
                    appointmentdate: DateAppointment,
                    appointmenttime: HourAppointment,
                    status: 'Agendada'
                }


                const hourToRemove = HourAppointment;

                const createdAppointment = await this.appointmentRepository.Create(AppointmentData);
                const updateUser = await this.userRepository.CreateAppointment(_id, createdAppointment as UpdateUser);
                const updateClinic = await this.clinicRepository.UpdateDoctorsAvailable(ClinicId);
                const updateDoctor = await this.doctorRepository.UpdateAvailableTimes(DoctorId, hourToRemove);
                
                if (createdAppointment && updateUser && updateClinic && updateDoctor) {
                    return { success: true, message: 'Appointment successfully created' };
                } else {
                 
                    if (!createdAppointment) {
                        return { error: 'Failed to create appointment', status: 500 };
                    }
                    if (!updateUser) {
                        return { error: 'Failed to update user', status: 500 };
                    }
                    if (!updateClinic) {
                        return { error: 'Failed to update clinic', status: 500 };
                    }
                    if (!updateDoctor) {
                        return { error: 'Failed to update doctor', status: 500 };
                    }
                }
                
            } else {
                return { error: 'Appointment creation failed.', status: 500 };
            }
        } catch (error) {
            return { error: "Something's gone wrong", status: 500 };
        }
    }

    

    async CancelAppointment(AppointmentId: any) {
        console.log('id reserve service - ', AppointmentId);

        try {
            // Encontre a consulta pelo ID
            const appointment = await this.appointmentRepository.FindById(AppointmentId);
            // Verifica se a consulta existe
            if (!appointment) {
                return { error: 'Reserve not found', status: 404 };
            }
            if (appointment.status == 'Cancelada') {
                return { error: 'This appointment has already been canceled', status: 400 }
            }

            // Encontre a clínica dessa consulta
            const clinicId = appointment.clinic;
            if (clinicId === undefined || clinicId === null) {
                return { error: 'Invalid Clinic ID in appointment', status: 400 }
            }
            const clinic = await this.clinicRepository.FindById(clinicId.toString());

            // Verifique se a clínica existe
            if (!clinic) {
                return { error: 'Clinic not found', status: 404 };
            }
            if (clinic && clinic.doctorsAvailable !== undefined) {
                clinic.doctorsAvailable += 1;
            }

            // Salve as alterações na clínica
            await clinic.save();

            appointment.status = 'Cancelada';
            await appointment.save(); // Salve o status da consulta atualizada

            return { message: 'Appointment successfully canceled' };
        } catch (error: any) {
            return { error: "Something's gone wrong", status: 500 };
        }
    }
}

export { AppointmentService };
