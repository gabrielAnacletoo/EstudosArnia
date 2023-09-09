import * as yup from 'yup'



/*
register validation
*/
class HotelSchemaValidation{
    static async isValid(data){
        const userSchema = yup.object().shape({
            name: yup.string().required(),
            address: yup.string().required(),
            roomsavailable: yup.string().required()
        })

        try {
            await userSchema.validate(data)
            return {message: 'Success', status: 200}
        } catch (error) {
            return {error: 'you need to fill in all the fields', status: 404}
        }
    }
}

export {HotelSchemaValidation}