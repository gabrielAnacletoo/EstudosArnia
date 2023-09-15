import { DoctorchemaValidation } from '../../../Utils/Validations/DoctorSchemaValidation';
import { Request, Response } from 'express';
import { DoctorService } from '../Service/DoctorService';
class DoctorController {
  constructor(private service: DoctorService) {}

  async CreateController(req: Request, res: Response) {
    const { body } = req;
    let result; 

    try {
      const bodyIsValid = await DoctorchemaValidation.isValid(body);
      if (bodyIsValid.error) {
        return res.status(400).json(bodyIsValid.error);
      }
      result = await this.service.CreateService(body);
      return res.status(201).json(result); 
    } catch (error) {
      if (result && 'message' in result) {
        return res.status(404).json(result);
      }
      return res.status(500).json({ error: 'Internal Server Error' });
    }
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

export { DoctorController };
