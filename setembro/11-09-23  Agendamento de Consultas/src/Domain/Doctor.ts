import {Schema, Types, model } from 'mongoose'



interface doctorType {
    name: string;
    specialty: string;
    availabletimes: string[];
}
//user deve ter ref ao appointment
const doctorSchema = new Schema({
    name: {type: String ,required: true},
    specialty: {type: String, required: true},
    availabletimes: [{type: String, required: true}],
},{timestamps: true})

const Doctor = model("doctors", doctorSchema);
export {Doctor}