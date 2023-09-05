import { ObjectId } from 'mongodb';

class LinkedisneyRepository { 
    constructor(collection,entity){
        this.collection = collection;
        this.entity = entity;
    }

    async CreateProfile(data){
        const Profile = new this.entity(data);
        return this.collection.insertOne(Profile);
    }

    async DeleteProfile(id) {
        const Profile = await this.FindById(id);
        if (Profile) {
            return this.collection.updateOne(
                { _id: new ObjectId(id) },
                { $set: { deletedAt: new Date().toLocaleDateString('pt-BR') } }
            );
        }
    }


    async ListAllDeleted() {
        return this.collection.find({ deletedAt: { $eq: null } }).toArray();
    }
    async ListAll() {
        return this.collection.find().toArray();
    }



    async FindById(id){
        return this.collection.findOne({_id: new ObjectId(id)})
    }

   

    async EditStatus(id, status){
        const Profile = await this.FindById(id);
        if(Profile){
            return this.collection.updateOne(
                {_id: new ObjectId(id)},
                { $set: { status }}
            )
        }
    }

}
export {LinkedisneyRepository}