import { Model } from 'mongoose';

import { ClinicDocument } from '../../../Domain/Clinic';

class ClinicRepository {
    constructor(private model: Model<ClinicDocument>){}

    async FindByEmail(email: string) {
        return await this.model.findOne({ email })
    }

    async FindById(id: string) {
        return await this.model.findById(id)
    }

    async FindByLocation(location: string) {
        return await this.model.findOne({ location })
    }


    async UpdateDoctorsAvailable(clinicId: string) {
       return  await this.model.findOneAndUpdate(
            { _id: clinicId },
            { $inc: { doctorsAvailable: -1 } },
            {new: true}
        );
    }    


    async Create(data: any) {
        return await this.model.create(data)
      
    }

    async FindAll(){
        return await this.model.find();
    }
}

export {ClinicRepository}