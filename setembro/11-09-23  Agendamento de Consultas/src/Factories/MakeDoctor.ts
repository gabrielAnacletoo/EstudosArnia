import { DoctorRepository } from "../App/Doctors/Repository/DoctorRepository";
import { DoctorService } from "../App/Doctors/Service/DoctorService";
import { DoctorController } from "../App/Doctors/Controller/DoctorController";
import { Doctor } from "../Domain/Doctor";


class MakeDoctor {
  static getInstance() {
 
    const Repository = new DoctorRepository(Doctor);
    const Service = new DoctorService(Repository);
    const Controller = new DoctorController(Service);
    return Controller;
  }
}

export { MakeDoctor };
