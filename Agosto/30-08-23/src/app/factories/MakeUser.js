import { UserRepository } from "../Repository/UserRepository.js";
import { UserService } from "../Service/UserService.js";
import { UserController } from "../Controller/UserController.js";
import { User } from "../../domain/UserSchema.js";

class MakeUser {
    static getInstance(){
        const repository = new UserRepository(User);
        const service = new UserService(repository);
        const controller = new UserController(service)
        return controller;
    }
}

export {MakeUser}