import * as yup from 'yup'



/*
register validation
*/
class UserSchemaValidation{
    static async isValid(data: any){
        const userSchema = yup.object().shape({
            name: yup.string().required(),
            email: yup.string().email().required(),
            password: yup.string().required()
        })

        try {
            await userSchema.validate(data)
            return {message: 'Success', status: 200}
        } catch (error) {
            return {error: 'you need to fill in all the fields', status: 404}
        }
    }
}

export {UserSchemaValidation}