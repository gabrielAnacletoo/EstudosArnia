import { DealershipRepository } from "../app/Repositorys/DealershipRepository.js"
import { DealershipServices } from "../app/Services/DealershipService.js"
import { DealerShipController } from "../app/Controllers/DealershipControllers.js"
import { DealerShip } from "../Domain/Dealership.js"

class MakeDealership {
  static getInstance() {
    const repository = new DealershipRepository(DealerShip)
    const service = new DealershipServices(repository)
    const controller = new DealerShipController(service)
    return controller
  }
}

export { MakeDealership }