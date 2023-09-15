import { Crypt } from "../../../Utils/Crypt";
import { UserRepository } from "../Repository/UserRepository";


class UserService {
  
    constructor(private repository: UserRepository) {}

    async CreateService(data: any) {
    const userAlreadyExists = await this.repository.FindByEmail(data.email)
    if(userAlreadyExists){
        return { error: 'User Already Exists', status: 400 }
    }
    const hashedPassword = Crypt.encrypt(data.password);
    data.password = hashedPassword;
    return await this.repository.Create(data)
}


    async FindAll() {
        return await this.repository.FindAll();
    }


    async FindAppointment(userId: string) {
        const result = await this.repository.FindAppointment(userId);
  
        if (!result) {
            return { error: 'User has no appointment', status: 404 };
        }
     
        return { message: "This user's Appointments", Appointments: result.Appointments };
    
    }

}
export { UserService }