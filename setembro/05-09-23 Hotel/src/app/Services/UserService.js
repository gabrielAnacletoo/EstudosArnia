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

     const hashedPassword = Crypt.encrypt(data.password);
     data.password = hashedPassword;
    return await this.repository.create(data)
     }


    async findAll(){
        return await this.repository.findAll();
    }

    async ReserveService(checkin, checkout){
        return await this.repository.createReserver(checkin, checkout);
    }

}
export {UserService}