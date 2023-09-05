
import { AuthSchemaValidation } from "../../utils/Validation/AuthSchema.js"
import { Errors } from "../../utils/Erros.js"

class UserController {
  constructor(service) {
    this.service = service
  }

  async create(req, res) {
    const { body, file } = req

    const bodyIsValid = AuthSchemaValidation.isValid(body)
    if(bodyIsValid.error) {
      return res.status(400).json(Errors.error400)
    }

    const data = {
      ...body,
      photo: {
        filename: file.filename,
        mimetype: file.mimetype,
      }
    }

    const result = await this.service.create(data)
    if ('error' in result) {
      return res.status(result.status).json(result)
    }

    return res.status(201).json(result)
  }

  async findAll(req, res) {
    const result = await this.service.findAll()
    res.json(result)
  }
}

export { UserController }