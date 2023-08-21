

class BlogController{
    constructor(service){
        this.service = service;
    }

    async CreateController(req, res){
        const result = await this.service.Create(req.body);
        res.status(200).json(result);
    }

    async LikesController(req,res){
        const id = req.params.id;
        const likes = req.body.likes;
        const result = await this.service.Like(id, likes);
        res.status(201).json('Post successfully modified');

    }

    async ListAllController(req,res) {
        const result = await this.service.Posts();
        res.status(200).json(result);
    }
  
    async SearchController(req,res){
        const author = req.params.author;
        const result = await this.service.Author(author);
        res.status(200).json(result);
    }

    async DeleteController(req,res){
        const post = req.body.deleted;
        const id = req.params.id;
        const result = await this.service.Delete(id,post);
        res.status(201).json(`Post ${id} deleted`);
    }

    async DeletedController(req,res){
        const result = await this.service.DeletedPosts();
        res.status(201).json(result);
    }
}




export {BlogController}