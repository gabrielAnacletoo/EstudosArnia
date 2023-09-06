
class HotelServices {
    constructor(repository){
        this.repository = repository
    }

    
    async newHotel(data){
        return await this.repository.Create(data)
     }


    async findAll(){
        return this.repository.findAll();
    }

    async findByID(id){
        return await this.repository.findById(id);
    }
    
    async findByLocation(address){
        const result = await this.repository.findByLocation(address);
        if(!result){
            return {error: "We couldn't find any hotel in this location", status: 404 }
        } else {
            return result;
        }
    }

}
export {HotelServices}