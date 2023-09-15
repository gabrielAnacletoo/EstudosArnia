
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
    appointmentdate: moment.Moment,
    appointmenttime: string,
    status: string
}