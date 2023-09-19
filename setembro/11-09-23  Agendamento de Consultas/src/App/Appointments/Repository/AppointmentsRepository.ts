import {Model, Document, Types } from 'mongoose'
import { AppointmentDocument } from '../../../Domain/Appointment'

class AppointmentRepository {
    constructor(private model: Model<AppointmentDocument>) {}

    async FindByEmail(email: string) {
        return await this.model.findOne({ email })
    }

    async FindById(id: string) {
        return await this.model.findById(id)
    }

    async Create(data: CreateAppointment) {
        return await this.model.create(data);
    }
    

    async FindAll(){
        return await this.model.find();
    }

}

export {AppointmentRepository}