import { UserSchemaValidation } from "../../../Utils/Validations/UserSchemaValidation";
import { Request, Response } from 'express';
import { UserService } from "../Service/UserService";
class UserController {
  constructor(private service: UserService) {}

  async CreateController(req: Request, res: Response) {
    const { body } = req;
    let result; 

    try {
      const bodyIsValid = await UserSchemaValidation.isValid(body);
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

  async FindAppointment(req: Request, res: Response) {
    const id = req.params.id; 
    const result = await this.service.FindAppointment(id);
    res.json(result);
  }
}

export { UserController };
