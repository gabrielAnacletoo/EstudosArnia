
class DealershipServices {
    constructor(repository){
        this.repository = repository
    }

    
    async NewDealership(data){
        return await this.repository.Create(data)
     }

    async findAll(){
        return this.repository.findAll();
    }

    async findByID(id){
        return await this.repository.findDealershipById(id);
    }
    
    async findByLocation(address){
        const result = await this.repository.findByLocation(address);
        if(!result){
            return {error: "We couldn't find any dealershipS in this location", status: 404 }
        } else {
            return result;
        }
    }

}
export {DealershipServices}