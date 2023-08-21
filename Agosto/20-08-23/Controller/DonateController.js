

class DonateController{
    constructor(service){
        this.service = service;
    }

    async CreateController(req, res){
        const result = await this.service.Create(req.body);
        res.status(200).json(`Objeto criado com sucesso`);
    }

    async DonateController(req,res){
        const id = req.params.id;
        const isDonated = req.body.isDonated;
        const result = await this.service.EditDonate(id, isDonated);
        res.status(201).json('Donate successfully modified');

    }

    async ListAllController(req,res) {
        const result = await this.service.ListAllDonates();
        res.status(200).json(result);
    }
  
    async SearchController(req,res){
        const city = req.params.city;
        const result = await this.service.City(city);
        res.status(200).json(result);
    }

    async DeleteController(req,res){
        const post = req.body.deleted;
        const id = req.params.id;
        const result = await this.service.DeletedDonate(id,post);
        res.status(200).json(`Post ${id} deleted`);
    }

    // async DeletedController(req,res){
    //     const result = await this.service.DeletedDonate();
    //     res.status(201).json(result);
    // }
}




export {DonateController}