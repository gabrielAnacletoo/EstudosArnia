import { Crypt } from "../../../Utils/Crypt";
import { DoctorRepository } from "../Repository/DoctorRepository";


class DoctorService {

    constructor(private repository: DoctorRepository) { }

    async CreateService(data: DoctorData) {
        const ExistDoctor = await this.repository.FindByName(data.name)
        if(ExistDoctor){
            return {error: 'There is already a doctor with this name', status: 400}
        }
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
export { DoctorService }