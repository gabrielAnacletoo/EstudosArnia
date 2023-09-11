import { RentRepository } from "../app/Repositorys/RentRepository.js"
import { RentServices } from "../app/Services/RentService.js"
import { RentController } from "../app/Controllers/RentControllers.js"
import { UserRepository } from "../app/Repositorys/UserRepository.js"
import { DealershipRepository } from "../app/Repositorys/DealershipRepository.js"
import { User } from "../Domain/User.js"
import { Rent } from "../Domain/Rent.js"
import { DealerShip } from "../Domain/Dealership.js"


class MakeRent {
  static getInstance() {
    const userRent = new UserRepository(User);
    const Dealership = new DealershipRepository(DealerShip)
    const rent = new RentRepository(Rent); 
  
   
    const service = new RentServices(userRent,Dealership,rent)
    const controller = new RentController(service)
    return controller
  }
}

export { MakeRent }