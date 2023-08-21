import { ObjectId } from 'mongodb';

class TransitionRepository{
    constructor(collection, entity){
        this.collection = collection
        this.entity = entity
    }

    create(data){
        const transition = new this.entity(data)
        return this.collection.insertOne(transition)
    }

    listAll(){
        return this.collection.find().toArray();
    }

    listWithDraw(){
        return this.collection.find({kind: 'withdraw'}).toArray();
    }

    listDeposit(){
        return this.collection.find({kind: 'deposit'}).toArray();
    }

    findById(id){
        return this.collection.findOne({_id: new ObjectId(id)})
    }

    //- Deve ser possivel cancelar uma transacao buscando pelo id e atualizando o canceledAt
    Cancel(id, newCanceled){
        return this.collection.updateOne(
            {_id: new ObjectId(id)},
            { $set: {canceledAt: newCanceled}}
            )
    }
}

export { TransitionRepository }