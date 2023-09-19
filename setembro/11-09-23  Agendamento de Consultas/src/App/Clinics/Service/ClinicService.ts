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

    async FindByLocation(location: string) {
        return await this.repository.FindByLocation(location);
    }

}
export { ClinicService }