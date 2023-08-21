

class TransitionService {
    constructor(repository){ //dependencia
        this.repository = repository;
    } 

    async CreateTransition(data) {
        if (data.kind !== 'withdraw' && data.kind !== 'deposit') {
            console.log("Invalid 'kind' value. Use 'withdraw' or 'deposit'.");
            return;
        }
        const result = await this.repository.create(data);
        return result;
    }

    async ListTransitions(){
        const result = await this.repository.listAll();
        return result;
    }

    async WithdrawalTransitions() {
        return this.repository.listWithDraw();
    }
    
    async DepositTransitions() {
        return this.repository.listDeposit();
    }
    async SearchById(id){
        return this.repository.findById(id);
    }

    async CancelTransition(id,canceledAt){
        const transition =  this.repository.findById(id);
            if(!transition) {
                return 'Transition not found.'
            } 
            return this.repository.Cancel(id,canceledAt);
    }

}

export { TransitionService }