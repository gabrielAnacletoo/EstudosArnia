import { OrderRepository } from "../repository/OrderRepository.js"
import { OrderService } from "../service/OrderService.js"


class MakeOrder {
    static getInstance(colletion){
        const repository = new OrderRepository( colletion, Order);
        const service = new OrderService(repository);
        return service;
    }
}

export {MakeOrder}