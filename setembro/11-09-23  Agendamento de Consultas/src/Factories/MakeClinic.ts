import { ClinicRepository } from "../App/Clinics/Repository/ClinicRepository";
import { ClinicService } from "../App/Clinics/Service/ClinicService";
import { ClinicController } from "../App/Clinics/Controller/ClinicController";
import { Clinic } from "../Domain/Clinic";


class MakeClinic {
  static getInstance() {
 
    const Repository = new ClinicRepository(Clinic);
    const Service = new ClinicService(Repository);
    const Controller = new ClinicController(Service);
    return Controller;
  }
}

export { MakeClinic };
