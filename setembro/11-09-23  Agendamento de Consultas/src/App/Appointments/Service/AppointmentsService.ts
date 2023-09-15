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
        private appointmentRepository: AppointmentRepository,
        ){}

        async CreateAppointment(Appointment: AppointmentData) {
            const { appointmentdate, appointmenttime, token, ClinicId, DoctorId } = Appointment;
            const compareData = Appointment;
            const [, tokenNovo] = token.split(" ");
            const decoded: any = JWT.decode(tokenNovo);
            const { _id, email } = decoded._doc;
        console.log(appointmenttime)
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
                    console.log(doctor)
                    if (!doctor) {
                        return { error: 'Doctor not found', status: 404 };
                    }
                
                    const hourToRemove = HourAppointment;

                    if (doctor.availabletimes.includes(hourToRemove)) {
                        // Remove a hora do array availabletimes
                        doctor.availabletimes = doctor.availabletimes.filter(time => time !== hourToRemove);
                    
                        console.log('hora da consulta:', HourAppointment);
                        console.log('horas disponiveis :', doctor.availabletimes);

                        // Atualize o médico com os novos availabletimes
                        await doctor.save();
                    } else {
                        return { error: 'Doctor has no appointment at this time', status: 400 };
                    }
        
                    const AppointmentData = {
                        user: userIdString,
                        doctor: DoctorId,
                        clinic:ClinicId,
                        appointmentdate: DateAppointment,
                        appointmenttime: HourAppointment,
                        status: 'Agendada'
                    }
        
                    const createdAppointment = await this.appointmentRepository.Create(AppointmentData);
                    
                    if (createdAppointment) {
                        user.appointment.push(createdAppointment._id);
                        await user.save();
        
                        if (clinic && clinic.doctorsAvailable !== undefined) {
                            console.log('doctors Available inicialmente:', clinic.doctorsAvailable);
                            clinic.doctorsAvailable -= 1;
                            console.log('doctors Available atualizados:', clinic.doctorsAvailable);
                            await clinic.save();
                        } else {
                            return { error: 'Doctors Available is not defined', status: 400 };
                        }
        
                        return createdAppointment;
                    } else {
                        return { error: 'Failure to schedule the exam.', status: 500 };
                    }
                } else {
                    return { error: 'Wrong date', status: 400 };
                }
            } catch (error) {
                console.error('Error:', error);
                return { error: "Something's gone wrong", status: 500 };
            }
        }
        


    async CancelAppointment(AppontmentId: any) {
        console.log('id reserve service - ' , AppontmentId)

        try {
            // Encontre a consult pelo ID
            const appointment = await this.appointmentRepository.FindById(AppontmentId);
            // Verifica se a consult existe
            if (!appointment) {
                return { error: 'Reserve not found', status: 404 };
            }
            if(appointment.status == 'Cancelada'){
                return {error: 'This appointment has already been canceled', status: 400}
            }
    
            // Encontre a clinica  dessa consulta
            const clinicId = appointment.clinic;
            if(clinicId === undefined || clinicId === null){
                return { error: 'Invalid Clinic ID in appointment', status: 400}
            }
            const clinic = await this.clinicRepository.FindById(clinicId.toString());
    
            // Verifique se o hotel existe
            if (!clinic) {
                return { error: 'clinic not found', status: 404 };
            }
            if(clinic && clinic.doctorsAvailable !== undefined){
                clinic.doctorsAvailable += 1;
            }
           
            // Salve as alterações no hotel
            await clinic.save();

            appointment.status = 'Cancelada';
            await appointment.save(); // Salve o status da  consulta atualizada
            
    
            return { message: 'Appointment successfully canceled' };
        } catch (error) {
            return { error: "Something's gone wrong", status: 500 };
        }
    }
    
}

export { AppointmentService };
