


class OrderService {
    constructor(repository){//dependecia 
        this.repository = repository;
    }

    async CreateOrder(data){
        const result = await this.repository.create(data)
        return result;
    }

    async ListAllOrders() {
        const result = await this.repository.listAll();
        return result;
    }
    

    async UpdateOrders(id, data) {
        const order = await this.repository.findById(id);
        if(!order) {
            return 'Order Not Found.'
        }
        return this.repository.updateOrder(id,data)
    }

}
export {OrderService}