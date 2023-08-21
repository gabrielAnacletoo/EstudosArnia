import { ObjectId } from 'mongodb';
import { Order } from '../entities/Order.js'

class OrderRepository {
    constructor(collection, entity) {
        this.collection = collection
        this.entity = entity
      }

      create(data) {
        const product = new this.entity(data)
        return this.collection.insertOne(product)
      }

    listAll() {
        return this.collection.find().toArray();
    }

    updateOrder(id,data){
      return this.collection.updateOne({_id: new ObjectId(id)}, {
        $set: data
      })
    }

    findById(id){
      return this.collection.findOne({_id: new ObjectId(id)})
    }
}
 
export {OrderRepository}