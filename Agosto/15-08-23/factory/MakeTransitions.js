import { TransitionService } from "../service/TransitionService.js"
import { TransitionRepository } from "../repository/TransitionRepository.js"
import { Transition } from "../entities/Transitions.js"
class MakeTransitions {
    static getInstance(colletion){
        const repository = new TransitionRepository(colletion,Transition)
        const service = new TransitionService(repository)

        return service  
    }
}

export { MakeTransitions }