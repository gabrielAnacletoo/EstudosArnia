import { DealerShipService } from "../Service/DealerShipService.js"
import { DealerShipRepository } from "../Repository/DealerShipRepository.js"
import { DealerShipController } from "../Controler/DealerShipController.js"
import { Cars } from "../Entity/Cars.js"

class MakeCars {
    static getInstance(colletion){
        const repository = new DealerShipRepository(colletion, Cars)
        const service = new DealerShipService(repository);
        const controller = new DealerShipController(service);
        return controller;
    }
}

export { MakeCars }