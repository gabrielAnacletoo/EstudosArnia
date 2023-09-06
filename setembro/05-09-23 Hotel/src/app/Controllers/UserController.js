
import { UserSchemaValidation } from "../../Utils/validation/UserSchema.js"



class UserController {
  constructor(service) {
    this.service = service
  }

  async CreateController(req, res) {
    const { body } = req

    const bodyIsValid = UserSchemaValidation.isValid(body)
    if(bodyIsValid.error) {
      return res.status(400).json(bodyIsValid.error)
    }

    const result = await this.service.create(body)
    if ('message' in result) {
      return res.status(404).json(result)
    }
    return res.status(201).json(result)
  }
  async Reserve(req, res) {
    const { checkin, checkout } = req.body;
    const result = await this.service.ReserveService(checkin, checkout);
    res.json(result)
  }

  
  async findAll(req, res) {
    const result = await this.service.findAll()
    res.json(result)
  }
}

export { UserController }