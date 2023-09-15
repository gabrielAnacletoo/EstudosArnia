import { User } from '../Domain/User'
import { UserRepository } from "../App/Users/Repository/UserRepository"
import { AuthService } from "../App/Auth/AuthService/AuthService"
import { AuthController } from "../App/Auth/AuthController/AuthController"

class MakeAuth {
  static getInstance() {
    const repository = new UserRepository(User)
    const service = new AuthService(repository)
    const controller = new AuthController(service)
    return controller
  }
}

export { MakeAuth }