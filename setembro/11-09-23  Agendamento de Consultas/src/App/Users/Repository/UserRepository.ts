import { Model } from 'mongoose';
import { UserDocument } from '../../../Domain/User';
import { makeError } from '../../../Utils/makeError';


class UserRepository {
    constructor(private model: any) {}

    async FindByEmail(email: string) {
        try {
            //return await this.model.findOne({ email }).select("+password")
            return await this.model.findOne({ email })
        } catch (error: any) {
            return makeError(error.message, 500)
        }
    }

    async FindById(id: string) {
        return await this.model.findById(id)
    }

    async Create(data: UserDocument) {
        return await this.model.create(data)
    }

    async FindAll(){
        return await this.model.find();
    }



    async FindAppointment(userId: string) {
        const user = await this.model.findOne({_id: userId}).populate({
            path: 'appointment',
            select: '-_id appointmentdate appointmenttime status',
            populate: [
                {
                    path: 'clinic',
                    model: 'clinics',
                    select: '-_id name location'
                },
                {
                    path: 'doctor',
                    model: 'doctors',
                    select: '-_id name specialty' 
                }
            ]
        });
    
        if (!user) {
            return { error: 'User has no appointment', status: 404 };
        }
    
        return { message: "This user's Appointments", Appointments: user.appointment };
    }
    
}

export { UserRepository }
