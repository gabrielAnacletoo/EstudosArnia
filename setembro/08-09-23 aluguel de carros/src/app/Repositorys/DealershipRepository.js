

class DealershipRepository {
    constructor(model){
        this.model = model;
    }

    async Create(data){
        return await this.model.create(data)
    }
    
    async findDealershipById(_id) {
        return await this.model.findById(_id);
    }

    async findAll(){
        return this.model.find()
    }

    async findByLocation(address){
        return this.model.findOne({address})
    }

}

export { DealershipRepository }