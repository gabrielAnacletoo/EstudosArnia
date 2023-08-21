

class DealerShipService { 
    constructor(repostiory){
        this.repostiory = repostiory;
    }

    async CreateCar(data){
        // if(data.placa.length > 0){
        //     console.log('You have already registered a vehicle with this license plate.');
        //     return
        // }
        const result = await this.repostiory.Create(data);
        return result;
    }

    async UpdateStats(id, status){
        const Car = await this.repostiory.findById(id);
        if(!Car){
            return 'Vehicle not found.'
        }
        return this.repostiory.UpdateCar(id,status)
    }

    async FindCarByPlate(LicensePlate){
        return this.repostiory.FindPlate(LicensePlate);
    }

    async ListAllCars(){
        return this.repostiory.ListAllCars();
    }
    
    async CarsSold(){
        return this.repostiory.ListCarsSold();
    }
}

export {DealerShipService}