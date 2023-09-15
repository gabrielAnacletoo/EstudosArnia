import { DoctorchemaValidation } from '../../../Utils/Validations/DoctorSchemaValidation';
import { Request, Response } from 'express';
import { ClinicService } from '../Service/ClinicService';


class ClinicController {
  constructor(private service: ClinicService) {}

  async CreateController(req: Request, res: Response) {
    const { body } = req;
    const result = await this.service.CreateService(body);

    if(!result){
      return res.status(400).json(result);
    }
      return res.status(201).json(result); 
  }

  async FindAll(req: Request, res: Response) {
    const result = await this.service.FindAll();
    res.json(result);
  }

  async FindById(req: Request, res: Response) {
    const id = req.params.id;
    const result = await this.service.FindById(id);
    res.json(result);
  }
}

export { ClinicController };
