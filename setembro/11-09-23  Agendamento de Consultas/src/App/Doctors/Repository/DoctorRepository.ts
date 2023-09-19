import { Model } from 'mongoose';
import { DoctorDocument } from '../../../Domain/Doctor';

class DoctorRepository {
    constructor(private model: Model<DoctorDocument>){}

    async FindByEmail(email: string) {
        return await this.model.findOne({ email })
    }

    async FindById(id: string) {
        return await this.model.findById(id)
    }

    async UpdateAvailableTimes(doctorId: string, hourToRemove: string) {
        return await this.model.findOneAndUpdate(
            {_id: doctorId },
            { $pull: { availabletimes: hourToRemove }},
            {new: true}
           )
    }

    async FindBySpecialty(specialty: string) {
        return await this.model.findOne({specialty})
    }

    async FindByName(name: string) {
        return await this.model.findOne({name})
    }

    async Create(data: DoctorDocument) {
        return await this.model.create(data)
    }

    async FindAll(){
        return await this.model.find();
    }
}

export {DoctorRepository}