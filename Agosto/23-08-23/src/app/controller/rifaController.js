

class RifaController {
    constructor(service){
        this.service = service
    }

    async CreateController(req,res){
        const { body } = req

        const result = await this.service.createService(body)
        
        res.status(201).json('item cadastrado com sucesso.')
    }
    async ListController(req, res){
        const result = await this.service.ListRifas();
        res.status(200).json(result)
    }

    async GeneratedControler(req,res){
        const id = req.params.id;
        const result = await this.service.Drawn(id)
        res.status(201).json(result)
    }

    async Valuecontroller(req,res){
        const id = req.params.id;
        const result = await this.service.Value(id)
        
        res.status(200).json(result)
    }
}

export {RifaController}