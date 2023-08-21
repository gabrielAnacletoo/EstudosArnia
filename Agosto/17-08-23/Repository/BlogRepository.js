import { ObjectId } from 'mongodb';

class BlogRepository { 
    constructor(collection,entity){
        this.collection = collection;
        this.entity = entity;
    }

    async CreateAuthor(data){
        const Author = new this.entity(data);
        return this.collection.insertOne(Author);
    }

    async FindById(id){
        return this.collection.findOne({_id: new ObjectId(id)})
    }

    async IncrementLikes(id) {
        const post = await this.FindById(id);
        if (post) {
            return this.collection.updateOne(
                { _id: new ObjectId(id) },
                { $inc: { likes: 1 } }
            );
        }
    }
    
    async SearchAuthor(author){
        return this.collection.findOne({ author })
    }
    async ListAllPosts(){
        return this.collection.find({deleted: { $ne: true} }).toArray();
    }

    async ListAllPostsDeleted(){
        return this.collection.find({deleted: { $ne: false} }).toArray();
    }

    async DeletePost(id, deleted){
        const post = await this.FindById(id);
        if(post){
            return this.collection.updateOne(
                {_id: new ObjectId(id)},
                { $set: { deleted }}
            )
        }
    }

}
export {BlogRepository}