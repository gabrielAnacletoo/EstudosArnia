

class ServiceTarefas {
    constructor(repository){
        this.repository = repository;
    }

    async CreateUserService(data){
        const res = await this.repository.CreateUser(data);
        return res;
    }

    async CreateTarefaService(userId, data){
        let status;
        if (["pendente", "fazendo", "concluido"].includes(data.status)){
            status = data.status;
        } else {
            return { error: "Status is not valid. Please provide a valid status."}
        }
        const res = await this.repository.CreateTarefa(userId, data);
        return res;
    }

    async ListTarefas(userId){
        const res = await this.repository.GetAllTarefas(userId)
        return res;
    }

    async listAllUserService(){
        const res = await this.repository.listAllusers();
        return res;
    }

}

export { ServiceTarefas }