import { HotelRepository } from "../app/Repositorys/HotelRepository.js"
import { HotelServices } from "../app/Services/HotelService.js"
import { HotelController } from "../app/Controllers/HotelsControllers.js"
import { Hotel } from "../Domain/Hotel.js"

class MakeHotels {
  static getInstance() {
    const repository = new HotelRepository(Hotel)
    const service = new HotelServices(repository)
    const controller = new HotelController(service)
    return controller
  }
}

export { MakeHotels }