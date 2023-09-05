import * as yup from 'yup'
import { Errors } from '../Erros.js'

class UserSchemaValidation{
    static async isValid(data){
        const userSchema = yup.object().shape({
            fullname: yup.string().required(),
            nickname:yup.string().required(),
            email: yup.string().email().required(),
            password: yup.string().required(),
        })

        try {
            await userSchema.validate(data)
            return { error : false}
        } catch (error) {
            return {error: Errors.error401}
        }
    }
}