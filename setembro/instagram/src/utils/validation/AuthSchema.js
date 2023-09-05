import * as yup from 'yup'
import { Errors } from '../Errors.js'

class AuthSchemaValidation {
    static async isValid(data){
        const authSchema = yup.object().shape({
            email: yup.string().email().required(),
            password: yup.string().required()
        })

        try {
            await authSchema.validate(data)
            return {message: Errors.alert200}
        }catch(error){
            return {error: Errors.error401}
        }
    }
}

export {AuthSchemaValidation}