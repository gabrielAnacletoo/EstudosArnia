import * as yup from 'yup'



/*
register validation
*/
class DoctorchemaValidation{
    static async isValid(data: any){
        const userSchema = yup.object().shape({
            name: yup.string().required(),
            specialty: yup.string().required(),
            availabletimes: yup.array().required()
        })

        try {
            await userSchema.validate(data)
            return {message: 'Success', status: 200}
        } catch (error) {
            return {error: 'you need to fill in all the fields', status: 404}
        }
    }
}

export {DoctorchemaValidation}