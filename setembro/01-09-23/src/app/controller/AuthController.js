import { AuthSchemaValidation } from "../../utils/Validation/AuthSchema.js"
import { Errors } from "../../utils/Erros.js"

class AuthController {
  constructor(service) {
    this.service = service
  }

  async login(req, res) {
    const { body } = req

    const bodyIsValid = AuthSchemaValidation.isValid(body)
    if (bodyIsValid.error) {
      return res.status(400).json(Errors.error400)
    }

    const result = await this.service.login(body)
    if('error' in result) {
      return res.status(result.status).json(result)
    }

    return res.status(200).json(Errors.error200)
  }
}

export { AuthController }