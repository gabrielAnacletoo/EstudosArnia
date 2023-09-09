import { ReserveRepository } from "../app/Repositorys/ReserveRepository.js"
import { ReserveServices } from "../app/Services/ReserveService.js"
import { ReserveController } from "../app/Controllers/ReserveControllers.js"
import { UserRepository } from "../app/Repositorys/UserRepository.js"
import { HotelRepository } from "../app/Repositorys/HotelRepository.js"
import { User } from "../Domain/User.js"
import { Reserve } from "../Domain/Reserve.js"
import { Hotel } from "../Domain/Hotel.js"

class MakeReserve {
  static getInstance() {
    const userReserve = new UserRepository(User);
    const HotelReserve = new HotelRepository(Hotel)
    const reserve = new ReserveRepository(Reserve); 
  
   
    const service = new ReserveServices(userReserve,HotelReserve,reserve)
    const controller = new ReserveController(service)
    return controller
  }
}

export { MakeReserve }