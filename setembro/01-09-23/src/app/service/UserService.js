import { Crypt } from "../../utils/Crypt.js";
import { Errors } from "../../utils/Erros.js";


class UserService {
    constructor(repository, PhotoRepository){
        this.repository = repository
        this.PhotoRepository = PhotoRepository
    }

    //para criar é verificado se ja existe um usuario com esse email
    async create(data){
    const userAlreadyExists = await this.repository.findByEmail(data.email)
    if(userAlreadyExists){
        return {error: Errors.UserAlreadyExists}
         }

    //definando a proprieade photo com o que vier atraves do data
    const photo = await this.PhotoRepository.create(data.photo)

    /*pegamos tudo que tem em data usando .... e atribuimos password criptografado
     e photo é atribuido o id vindo do repository de photos  */ 
    const user = {
        ...data,
        password: Crypt.encrypt(data.password),
        photo: photo._id
    }
    }

    async findAll(){
        return this.repository.findAll();
    }
}