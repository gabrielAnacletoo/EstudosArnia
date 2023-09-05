import { UserRepository } from "../app/repository/UserRepository.js"
import { PhotoRepository } from "../app/repository/PhotoRepository.js"
import { UserService } from "../app/service/UserService.js"
import { UserController } from "../app/controller/UserController.js"
import { User } from "../domain/User.js"
import { Photo } from "../domain/Photo.js"

class MakeUser {
  static getInstance() {
    const repository = new UserRepository(User)
    const photoRepository = new PhotoRepository(Photo)
    const service = new UserService(repository, photoRepository)
    const controller = new UserController(service)
    return controller
  }
}

export { MakeUser }