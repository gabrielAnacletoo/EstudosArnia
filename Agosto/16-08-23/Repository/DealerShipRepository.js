import { ObjectId } from 'mongodb';


class DealerShipRepository{
    constructor(collection, entity){
        this.collection = collection;
        this.entity = entity;
    }

    //Car é uma nova instancia de entity que virá por paramêtro.
    Create(data){
        const Car = new this.entity(data);
        return this.collection.insertOne(Car)
    }
    findById(id){
        return this.collection.findOne({_id: new ObjectId(id)})
    }

    UpdateCar(id, stats){
        return this.collection.updateOne(
            {_id: new ObjectId(id)},
            { $set: {sold: stats}})
    }

    FindPlate(LicensePlate){
        return this.collection.findOne({ LicensePlate: LicensePlate})
    }
    
    ListAllCars(){
        const Cars = this.collection.find().toArray();
        return Cars
    }

    
    ListCarsSold(){
        return this.collection.find({ sold: true }).toArray();
    }
}

export {DealerShipRepository}