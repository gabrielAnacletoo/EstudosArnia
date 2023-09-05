import jwt from 'jsonwebtoken'
import { Crypt } from '../../utils/Crypt.js'
import { Errors } from '../../utils/Erros.js'

class AuthService{
    constructor(userRepository){
        this.userRepository = UserRepository
    }

    async login(data){
     // Verificar se existe user
     const userAlreadyExists = await this.userRepository.findByEmail(data.email)
     if (!userAlreadyExists) {
       return {Error: Errors.UserAlreadyExists}
     }

     // Validar se a senha está correto
     const passwordIsValid = Crypt.compare(data.password, userAlreadyExists.password)
    if(!passwordIsValid){
        return {Error: Errors.UserPassword}
    } 

    //Gerar Token 
    const payload = {...userAlreadyExists}
    const secretKey = process.env.JWT_SECRET_KEY
    const options = { expiresIn: '20m' }

    const token = jwt.sign(payload,secretKey,options)

    return { token, user: userAlreadyExists }
    }
}

export { AuthService }