import { ObjectId } from 'mongodb';

class DonateRepository { 
    constructor(collection,entity){
        this.collection = collection;
        this.entity = entity;
    }

    async CreateDonate(data){
        const Donate = new this.entity(data);
        return this.collection.insertOne(Donate);
    }

    async ChangeDonate(id, isDonated) {
        const Donate = await this.FindById(id);
        if (Donate) {
            return this.collection.updateOne(
                { _id: new ObjectId(id) },
                { $set: { isDonated } }
            );
        }
    }

    async FindByCity(city){
        return this.collection.findOne({ city })
    }

    async ListAll(){
        return this.collection.find({deleted: { $ne: true} }).toArray();
    }


    async FindById(id){
        return this.collection.findOne({_id: new ObjectId(id)})
    }

   
    // async ListAllDonateDeleted(){
    //     return this.collection.find({deleted: { $ne: false} }).toArray();
    // }

    async Delete(id, deleted){
        const post = await this.FindById(id);
        if(post){
            return this.collection.updateOne(
                {_id: new ObjectId(id)},
                { $set: { deleted }}
            )
        }
    }

}
export {DonateRepository}