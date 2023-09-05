

class TarefasRepository {
    constructor(tarefas, user) {
        this.tarefas = tarefas
        this.user = user
    }

    async CreateUser(data) {
        const user = new this.user(data)
        return await user.save();
    }

    async CreateTarefa(userId,data) {
        const user = await this.user.findById(userId);
        
        if(!user){
            console.log('user not found')
        }

        const tarefa = new this.tarefas({
            ...data,
            user: user._id
        })
        return await tarefa.save();
    }

    async GetAllTarefas(userId){
        return await this.tarefas.find({ user: userId})
    }

    async listAllusers(){
        return await this.user.find();
    }
}

export { TarefasRepository }