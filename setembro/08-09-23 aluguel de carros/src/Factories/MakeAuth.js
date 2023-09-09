import { User } from "../Domain/User.js"
import { UserRepository } from "../app/Repositorys/UserRepository.js"
import { AuthService } from "../app/Services/AuthService.js"
import { AuthController } from "../app/Controllers/AuthControllers.js"

class MakeAuth {
  static getInstance() {
    const repository = new UserRepository(User)
    const service = new AuthService(repository)
    const controller = new AuthController(service)
    return controller
  }
}

export { MakeAuth }