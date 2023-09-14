import { Schema, model, InferSchemaType } from 'mongoose';


const ClinicSchema = new Schema({
    name: {type: String ,required: true},
    location: {type: String, required: true},
    specializations: [{type: String, required: true}],
    doctorsAvailable: {type: Number},
},{timestamps: true})

type ClinicDocument  = InferSchemaType<typeof ClinicSchema>

const Clinic = model("clinics", ClinicSchema);
export { Clinic, ClinicDocument}