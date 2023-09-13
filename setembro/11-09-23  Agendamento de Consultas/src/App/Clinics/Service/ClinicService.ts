import { Crypt } from "../../../Utils/Crypt";



class ClinicService {
  
    constructor(private repository: any) {}

    async CreateService(data: any) {
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
export { ClinicService }