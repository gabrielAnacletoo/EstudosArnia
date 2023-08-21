
class DealerShipController {
    constructor(service){
        this.service = service
    }

    async CreateController(req,res){
        const result = await this.service.CreateCar(req.body)

        res.status(201).json(result)
    }
    
    async ListAllCarsController(req, res){
        const result = await this.service.ListAllCars();

        res.status(200).json(result)
    }

    async UpdateCarController(req,res){
        const CarId = req.params.id;
        const CarStats = req.body.sold;
        const result = await this.service.UpdateStats(CarId, CarStats);
        res.status(200).json('Vehicle successfully modified');

    }

    async FindPlateController(req,res){
        const CarPlate = req.params.LicensePlate;
        const result = await this.service.FindCarByPlate(CarPlate)

        res.status(200).json(result)
    }

    async CarsSoldController(req,res){
    const result = await this.service.CarsSold();

    res.status(200).json(result)
    }
    
}

export { DealerShipController }