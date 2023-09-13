import { UserRepository } from "../App/Users/Repository/UserRepository";
import { UserService } from "../App/Users/Service/UserService";
import { UserController } from "../App/Users/Controller/UserController";
import { User } from '../Domain/User'


class MakeUser {
  static getInstance() {
 
    const Repository = new UserRepository(User);
    const Service = new UserService(Repository);
    const Controller = new UserController(Service);
    return Controller;
  }
}

export { MakeUser };
