import { HotelSchemaValidation } from "../../Utils/validation/HotelSchema.js"



class HotelController {
  constructor(service) {
    this.service = service
  }

  async CreateController(req, res) {
    const { body } = req
    const bodyIsValid = HotelSchemaValidation.isValid(body)
    if (bodyIsValid.error) {
      return res.status(400).json(bodyIsValid.error)
    }
    const result = await this.service.newHotel(body)
    return res.status(201).json(result)
  }

  async findAll(req, res) {
    const result = await this.service.findAll()
    res.json(result)
  } 
  
  async findByLocation(req, res) {
    const address = req.params.address; // Acesse o valor do endereço a partir dos parâmetros da rota
    console.log(address)
    const result = await this.service.findByLocation(address)
    if ('error' in result) {
      return res.status(404).json({ error: result.error });
    }
    return res.status(200).json(result);
  }

  async findById(req, res) {
    const id = req.params.id
    const result = await this.service.findHotelById(id)
    res.json(result)
  }
}

export { HotelController }