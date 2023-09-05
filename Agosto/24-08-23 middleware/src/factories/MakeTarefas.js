import { TarefasRepository } from "../app/repository/RepositoryTarefas.js";
import { ServiceTarefas } from "../app/service/ServiceTarefas.js";
import { TarefaController } from "../app/controller/ControllerTarefas.js";
import { Tarefa, User } from "../domain/Schemas.js";

class MakeTarefas {
    static getInstance(){
        const repository = new TarefasRepository(Tarefa, User);
        const service = new ServiceTarefas(repository);
        const controller = new TarefaController(service)
        return controller;
    }
}
export { MakeTarefas }