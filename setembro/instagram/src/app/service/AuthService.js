import jwt from 'jsonwebtoken'
import { Crypt } from '../../utils/Crypt.js'
import { Errors } from '../../utils/Errors.js'

class AuthService{
    constructor(userRepository){
        this.userRepository = userRepository
    }

    async login(data) {
        // Verificar se existe user
        const userAlreadyExists = await this.userRepository.findByEmail(data.email)
        console.log("userAlreadyExists", userAlreadyExists.password)
        if (!userAlreadyExists) {
          return {error: Errors.UserPassword}
        }
        // Validar se a senha está correto
        const passwordIsValid = Crypt.compare(data.password, userAlreadyExists.password)
        console.log('Senha Vinda do insomnia: ', data.password, '-', 'Senha vinda do banco de dados: ', userAlreadyExists.password)
        console.log('Retorno verdadeiro ou falso na comparação: ', passwordIsValid)
        if (!passwordIsValid) {
          return {error: Errors.UserPassword}
        }
    
        // Gerar token
        const payload = { ...userAlreadyExists }
        const secretKey = process.env.JWT_SECRET_KEY
        const options = { expiresIn: '15m' }
    
        const token = jwt.sign(payload, secretKey, options)
    
        return  { token, user: userAlreadyExists }
      }
    
    }

export { AuthService }