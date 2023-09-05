import { InventoryRepository } from "../app/repository/InventoryRepository.js"
import { InventoryService } from "../app/service/InventoryService.js"
import { InventoryController } from "../app/controller/InventoryController.js"
import { Inventory } from "../entity/Inventory.js"

class MakeInventory {
    static getInstance(){
        const repository = new InventoryRepository(Inventory)
        const service = new InventoryService(repository)
        const controller = new InventoryController(service)

        return controller
    }
}

export {MakeInventory}