import * as yup from 'yup'
import { Errors } from '../Errors.js'


/*
register validation
*/
class UserSchemaValidation{
    static async isValid(data){
        const userSchema = yup.object().shape({
            fullname: yup.string().required(),
            email: yup.string().email().required(),
            password: yup.string().required()
        })

        try {
            await userSchema.validate(data)
            return {message: Errors.alert200}
        } catch (error) {
            return {error: Errors.UserPassword}
        }
    }
}

export {UserSchemaValidation}