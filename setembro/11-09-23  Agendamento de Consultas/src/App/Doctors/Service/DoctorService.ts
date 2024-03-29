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

    async FindBySpecialty(specialty: string) {
        return await this.repository.FindBySpecialty(specialty);
    }


}
export { DoctorService }