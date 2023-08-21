

class DonateService {
    constructor(repository){
        this.repository = repository;
    }

    async Create(data){
        const result = await this.repository.CreateDonate(data);
        return result;
    }

    async EditDonate(id,DonateValue){
        const result = await this.repository.ChangeDonate(id, DonateValue);
        return result;
    } 

    async City(city){
        const result = await this.repository.FindByCity(city);
        return result;
    }

    async ListAllDonates(){
        const result = await this.repository.ListAll();
        return result;
    }

    async SearchID(id){
        const result = await this.repository.FindById(id);
        return result;
    }

    async DeletedDonate(){
        const result = await this.repository.Delete();
        return result;
    }
}

export {DonateService}