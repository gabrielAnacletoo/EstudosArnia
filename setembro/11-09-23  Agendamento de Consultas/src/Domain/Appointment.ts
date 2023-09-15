import { Schema, model, InferSchemaType } from 'mongoose';

const AppointmentSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'usersmeds' },
    clinic: { type: Schema.Types.ObjectId, ref: 'clinics' },
    doctor: { type: Schema.Types.ObjectId, ref: 'doctors' },
    appointmentdate: { type: Date, required: true },
    appointmenttime: { type: String, required: true},
    status: {type: String, enum: ["Agendada", "Cancelada"] }
},{timestamps: true})

type AppointmentDocument  = InferSchemaType<typeof AppointmentSchema>

const Appointment = model("appointments", AppointmentSchema)
export {Appointment,AppointmentDocument}
