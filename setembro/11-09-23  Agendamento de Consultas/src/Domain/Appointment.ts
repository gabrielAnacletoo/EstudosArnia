import {Schema, Types, model } from 'mongoose'


interface appointment {
    user: Types.ObjectId;
    clinic: Types.ObjectId;
    doctor: Types.ObjectId;
    appointmentdate: Date;
    appointmenttime: string;
}

const AppointmentSchema = new Schema<appointment>({
    user: { type: Schema.Types.ObjectId, ref: 'usersmeds' },
    clinic: { type: Schema.Types.ObjectId, ref: 'clinics' },
    doctor: { type: Schema.Types.ObjectId, ref: 'doctors' },
    appointmentdate: { type: Date, required: true },
    appointmenttime: { type: String, required: true}
},{timestamps: true})

const Appointment = model("appointments", AppointmentSchema)
export {Appointment}