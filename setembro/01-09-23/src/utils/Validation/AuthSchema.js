import * as yup from 'yup'
import { Errors } from '../Erros.js'

class AuthSchemaValidation {
    static async isValid(data){
        const authSchema = yup.object().shape({
            email: yup.string().email().required(),
            password: yup.string.required()
        })

        try {
            await authSchema.validate(data)
            return { error: false}
        } catch (error) {
            return {error: Errors.error401}
        }
    }
}

export {AuthSchemaValidation}