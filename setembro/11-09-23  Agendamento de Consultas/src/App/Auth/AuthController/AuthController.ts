import { AuthSchemaValidation } from "../../utils/validation/AuthSchema.js"

class AuthController {
  constructor(service) {
    this.service = service
  }

  async LoginController(req, res) {
    const { body } = req

    const bodyIsValid = AuthSchemaValidation.isValid(body)
    if (!bodyIsValid) {
      return res.status(400).json(bodyIsValid.error)
    }

    const result = await this.service.login(body);
    if ('error' in result) {
      return res.status(result.status).json(result.error)
    }

    return res.status(200).json(result)
  }
}

export { AuthController }