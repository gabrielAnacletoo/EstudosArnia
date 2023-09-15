import jwt from 'jsonwebtoken'
import { Crypt } from '../../../Utils/Crypt'
import { UserRepository } from '../../Users/Repository/UserRepository'

class AuthService {
    constructor(private repository: UserRepository) {}

    async login(data: AuthData) {
        try {
            // Verificar se existe um usuário com o email fornecido
            const userAlreadyExists = await this.repository.FindByEmail(data.email)

            if (!userAlreadyExists) {
                return { error: 'Email or password invalid', status: 401 }
            }

            // Validar se a senha está correta
            const passwordIsValid = Crypt.compare(data.password, (userAlreadyExists as AuthData).password)

            if (!passwordIsValid) {
                return { error: 'Email or password invalid', status: 401 }
            }

            // Gerar token
            const payload = { ...userAlreadyExists }
            const secretKey = process.env.JWT_SECRET_KEY as string
            const options = { expiresIn: '55m' }

            const token = jwt.sign(payload, secretKey, options)

            return { token, user: userAlreadyExists }
        } catch (error) {
            console.error('Error during login:', error)
            return { error: 'Something went wrong', status: 500 }
        }
    }
}

export { AuthService }
