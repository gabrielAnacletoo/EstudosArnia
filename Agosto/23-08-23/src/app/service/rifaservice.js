

class RifaService {
    constructor(repository){
        this.repository = repository
    }

    async createService(data){
        const result = await this.repository.create(data)
        return result
    }
    
    async ListRifas(){
         return await this.repository.listAll();
    }

    async Drawn(id){
        return await this.repository.ValueDrawn(id);
    }
    
    async Value(id){
        return await this.repository.value(id);
    }
}

export {RifaService}