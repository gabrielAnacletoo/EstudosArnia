import jwt from 'jsonwebtoken'
import { Crypt } from '../../utils/Crypt.js'

class AuthService {
    constructor(userRepository) {
        this.userRepository = userRepository
    }

    async login(data) {
        try {
            // Verificar se existe um usuário com o email fornecido
            const userAlreadyExists = await this.userRepository.findByEmail(data.email)

            if (!userAlreadyExists) {
                return { error: 'Email or password invalid', status: 401 }
            }

            // Validar se a senha está correta
            const passwordIsValid = Crypt.compare(data.password, userAlreadyExists.password)

            if (!passwordIsValid) {
                return { error: 'Email or password invalid', status: 401 }
            }

            // Gerar token
            const payload = { ...userAlreadyExists }
            const secretKey = process.env.JWT_SECRET_KEY
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
