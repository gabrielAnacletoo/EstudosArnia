import { Model } from 'mongoose';
import { UserDocument } from '../../../Domain/User';
import { makeError } from '../../../Utils/makeError';


class UserRepository {
    constructor(private model: Model<UserDocument>) {}

    async FindByEmail(email: string) {
        try {
            return await this.model.findOne({ email }).select("+password")
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
}

export { UserRepository }
