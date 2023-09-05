

class InventoryController {
    constructor(service){
        this.service = service
    }

    async CreateController(req,res){
        const { body } = req

        const result = await this.service.createService(body)
        
        res.status(201).json('item cadastrado com sucesso.')
    }
}

export {InventoryController}