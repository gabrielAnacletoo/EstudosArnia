
//type params appoint
interface AppointmentData {
    appointmentdate: string
    appointmenttime: string
    token: string
    ClinicId: string
    DoctorId: string
}

//create doctor
interface DoctorData {
 name: string
 specialty: string
 availabletimes: []
 _id: string
 createdAt: NativeDate
 updatedAt: NativeDate
 
}

//auth
interface AuthData {
    email: string
    password: string
}

//create user 
interface UserData{
	name: string
	email: string
	password: string
    createdAt: NativeDate
    updatedAt: NativeDate
    appointment: ObjectId[];
}
//create appointment
interface CreateAppointment{
    user: string,
    doctor: string,
    clinic: string,
    appointmentdate: moment.Moment,
    appointmenttime: string,
    status: string
}

interface UpdateUser {
        user: Types.ObjectId; // O tipo deve ser ObjectId, que é o tipo padrão para referências no Mongoose
        doctor: Types.ObjectId;
        clinic: Types.ObjectId;
        appointmentdate: Date; // Use Date em vez de moment.Moment
        appointmenttime: string;
        status: string;
}