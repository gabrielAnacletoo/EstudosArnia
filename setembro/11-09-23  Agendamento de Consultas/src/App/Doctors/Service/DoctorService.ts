import { Crypt } from "../../../Utils/Crypt";
import { DoctorRepository } from "../Repository/DoctorRepository";


class DoctorService {

    constructor(private repository: DoctorRepository) { }

    async CreateService(data: DoctorData) {
        return await this.repository.Create(data)
    }
    async FindAll() {
        return await this.repository.FindAll();
    }


    // async findByReserversByid(userId) {
    //     const result = await this.repository.findByReserversByid(userId);
    //     if (!result) {
    //         return { error: 'User has no bookings', status: 404 };
    //     }

    //     return { message: "This user's bookings", reserves: result.reserves };
    // }

}
export { DoctorService }