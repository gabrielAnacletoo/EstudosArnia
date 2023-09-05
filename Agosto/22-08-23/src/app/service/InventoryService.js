

class InventoryService {
    constructor(repository){
        this.repository = repository
    }

    async createService(data){
        const result = await this.repository.create(data)
        return result
    }
}

export {InventoryService}