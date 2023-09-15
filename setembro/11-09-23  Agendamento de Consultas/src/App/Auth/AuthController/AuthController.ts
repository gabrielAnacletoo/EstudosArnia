import { AuthSchemaValidation } from "../../../Utils/Validations/AuthSchema"
import { AuthService } from "../AuthService/AuthService"
import { Request , Response} from "express"

class AuthController {
  constructor(private service: AuthService) {}

  async LoginController(req: Request, res: Response) {
    const { body } = req

    const bodyIsValid = AuthSchemaValidation.isValid(body)
    if (bodyIsValid && 'error' in bodyIsValid) {
      return res.status(400).json(bodyIsValid.error)
    }

    const result = await this.service.login(body);
    if ('error' in result) {
      return res.status(result?.status || 401).json(result?.error || "Email or password invalid");

    }

    return res.status(200).json(result)
  }
}

export { AuthController }