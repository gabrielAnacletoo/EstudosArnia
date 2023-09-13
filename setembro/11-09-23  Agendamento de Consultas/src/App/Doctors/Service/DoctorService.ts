import { Crypt } from "../../../Utils/Crypt";



class DoctorService {
  
    constructor(private repository: any) {}

    async CreateService(data: any) {
    const userAlreadyExists = await this.repository.FindByEmail(data.email)
    if(userAlreadyExists){
        return { error: 'Doctor Already Exists', status: 400 }
    }
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