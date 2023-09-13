import {Model, Document } from 'mongoose'


class UserRepository {
    constructor(private model: any) {}

    async FindByEmail(email: string) {
        return await this.model.findOne({ email })
    }

    async FindById(id: string) {
        return await this.model.findById(id)
    }

    async Create(data: any) {
        return await this.model.create(data)
    }

    async FindAll(){
        return await this.model.find();
    }

}

export {UserRepository}