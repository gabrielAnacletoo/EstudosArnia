import { Schema, model, InferSchemaType, Document } from 'mongoose';

// Define o esquema
const doctorSchema = new Schema({
  name: { type: String, required: true },
  specialty: { type: String, required: true },
  availabletimes: [{ type: String, required: true }],
}, { timestamps: true });

// Use InferSchemaType para inferir o tipo do documento
type DoctorDocument = InferSchemaType<typeof doctorSchema>;

const Doctor = model<DoctorDocument>("doctors", doctorSchema);

export { Doctor, DoctorDocument };
