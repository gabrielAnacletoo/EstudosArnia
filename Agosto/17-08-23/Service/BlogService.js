

class BlogService {
    constructor(repository){
        this.repository = repository;
    }

    async Create(data){
        const result = await this.repository.CreateAuthor(data);
        return result;
    }

    async Like(id){
        const result = await this.repository.IncrementLikes(id);
        return result;
    } 

    async Author(author){
        const result = await this.repository.SearchAuthor(author);
        return result;
    }

    async Posts(){
        const result = await this.repository.ListAllPosts();
        return result;
    }

    async Delete(id,post){
        const result = await this.repository.DeletePost(id,post);
        return result;
    }

    async DeletedPosts(){
        const result = await this.repository.ListAllPostsDeleted();
        return result;
    }
}

export {BlogService}