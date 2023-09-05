class InventoryRepository {
    constructor(model){
        this.model = model
    }

    async create(data){
        const Item = new this.model(data)
        
       return await Item.save();
    }
}

export {InventoryRepository}