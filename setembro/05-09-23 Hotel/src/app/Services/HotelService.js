
class HotelServices {
    constructor(repository){
        this.repository = repository
    }

    
    async newHotel(data){
        const result = await this.repository.Create(data)
        if(!result){
            return {error: 'Failure to create hotel', status: 400}
        }
        return result;
     }


    async findAll(){
        return this.repository.findAll();
    }

    async findByID(id){
       const result = await this.repository.findHotelById(id);
    if(!result){
        return {error: 'Hotel not found', status: 404}
    }
    return result;
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