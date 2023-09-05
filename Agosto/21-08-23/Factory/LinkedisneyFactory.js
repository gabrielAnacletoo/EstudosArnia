import { LinkedisneyRepository } from "../Repository/LinkedisneyRepository.js";
import { Linkedisney } from "../Entity/Linkedisney.js";
import { LinkedisneyService } from "../Service/LinkedisneyService.js";
import { LinkedisneyController } from "../Controller/LinkedisneyController.js"

class MakeLinkedisney{
    static getInstance(collection){
        const repository = new LinkedisneyRepository(collection, Linkedisney);
        const service = new LinkedisneyService(repository);
        const controller = new LinkedisneyController(service);
        return controller;
    }
}
export { MakeLinkedisney }