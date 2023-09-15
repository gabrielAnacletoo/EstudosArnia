import { Crypt } from "../../../Utils/Crypt";
import { ClinicRepository } from "../Repository/ClinicRepository";


class ClinicService {
  
    constructor(private repository: ClinicRepository) {}

    async CreateService(data: any) {
    return await this.repository.Create(data)
}
    async FindAll() {
        return await this.repository.FindAll();
    }


    async FindById(id: string) {
        return await this.repository.FindById(id);
    }

    // async findByReserversByid(userId) {
    //     const result = await this.repository.findByReserversByid(userId);
    //     if (!result) {
    //         return { error: 'User has no bookings', status: 404 };
    //     }

    //     return { message: "This user's bookings", reserves: result.reserves };
    // }

}
export { ClinicService }