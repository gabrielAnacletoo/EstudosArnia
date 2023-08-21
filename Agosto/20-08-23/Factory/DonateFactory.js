import { DonateRepository } from "../Repository/DonateRepository.js";
import { Donate } from "../Entity/Donate.js";
import { DonateService } from "../Service/DonateService.js";
import { DonateController } from "../Controller/DonateController.js";

class MakeDonate{
    static getInstance(collection){
        const repository = new DonateRepository(collection, Donate);
        const service = new DonateService(repository);
        const controller = new DonateController(service);
        return controller;
    }
}
export { MakeDonate }