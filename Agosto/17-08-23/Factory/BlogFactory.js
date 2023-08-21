import { BlogService } from "../Service/BlogService.js";
import { BlogRepository } from "../Repository/BlogRepository.js";
import { BlogController } from "../Controller/BlogController.js";
import { Blog } from "../Entity/Blog.js";

class MakeBlog{
    static getInstance(collection){
        const repository = new BlogRepository(collection, Blog);
        const service = new BlogService(repository);
        const controller = new BlogController(service);
        return controller;
    }
}
export { MakeBlog }