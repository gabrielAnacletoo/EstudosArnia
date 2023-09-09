import { UserRepository } from "../app/Repositorys/UserRepository.js";
import { UserService } from "../app/Services/UserService.js";
import { UserController } from "../app/Controllers/UserController.js";
import { ReserveRepository } from "../app/Repositorys/ReserveRepository.js";
import { User } from "../Domain/User.js";
import { Reserve } from "../Domain/Reserve.js";

class MakeUser {
  static getInstance() {
 
    const userRepository = new UserRepository(User,Reserve);
    const userService = new UserService(userRepository);
    const userController = new UserController(userService);
    return userController;
  }
}

export { MakeUser };
