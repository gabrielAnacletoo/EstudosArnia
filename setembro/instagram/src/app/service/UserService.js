import { Crypt } from "../../utils/Crypt.js";
import { Errors } from "../../utils/Errors.js";


class UserService {
    constructor(repository){
        this.repository = repository
    }

    //para criar é verificado se ja existe um usuario com esse email
    async create(data){
    const userAlreadyExists = await this.repository.findByEmail(data.email)
    if(userAlreadyExists){
        return {message: Errors.UserAlreadyExists}
         }
         return await this.repository.create(data)
         }

    async findAll(){
        return this.repository.findAll();
    }


}
export {UserService}