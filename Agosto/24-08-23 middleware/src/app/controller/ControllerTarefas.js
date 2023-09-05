

class TarefaController{
    constructor(service){
        this.service = service;
    }

    async CreateUserController(req,res){
        const { body } = req;

        const result = await this.service.CreateUserService(body);
        res.status(201).json('Usuario cadastrado com sucesso.')
    }

    async CreateTarefaController(req,res){
        const id = req.body.user;
        const body = req.body;
        const result = await this.service.CreateTarefaService(id,body)
        res.status(201).json('Tarefa cadastrada com sucesso.')   
    }

    async TarefasController(req,res){
        const userId = req.params.id;
        const result = await this.service.ListTarefas(userId)

        res.status(200).json(result);
    }
    async ListAllUserController(req, res){
        const result = await this.service.listAllUserService();
        res.status(200).json(result)
    }
}

export { TarefaController }