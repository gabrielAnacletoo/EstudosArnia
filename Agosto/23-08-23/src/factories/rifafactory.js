import { RifaRepository } from '../app/repository/rifaRepository.js'
import { RifaService } from '../app/service/rifaservice.js'
import { RifaController } from '../app/controller/rifaController.js'
import { Rifa } from '../domain/rifa.js'

class MakeRifas {
    static getInstance(){
        const repository = new RifaRepository(Rifa)
        const service = new RifaService(repository)
        const controller = new RifaController(service)

        return controller
    }
}

export {MakeRifas}