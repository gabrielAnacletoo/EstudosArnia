interface AppointmentData {
    appointmentdate: string
    appointmenttime: string
    token: string
    ClinicId: string
    DoctorId: string
}

interface DoctorData {
 name: string
 specialty: string
 availabletimes: []
 _id: string
 createdAt: NativeDate
 updatedAt: NativeDate
 
}