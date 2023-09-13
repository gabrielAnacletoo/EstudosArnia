import {Schema, Types, model } from 'mongoose'



interface clinicType {
    name: string;
    location: string
    specializations: string[];
    doctorsAvailable: number;
}
//user deve ter ref ao appointment
const ClinicSchema = new Schema({
    name: {type: String ,required: true},
    location: {type: String, required: true},
    specializations: [{type: String, required: true}],
    doctorsAvailable: {type: Number},
},{timestamps: true})

const Clinic = model("clinics", ClinicSchema);
export {Clinic}