

class ReserveController {
    constructor(service) {
      this.service = service
    }
  
    async ReserveController(req, res) {
      const { checkin, checkout, status, hotelId } = req.body
      const token = req.headers.authorization;
      const reserve = {
        checkin,
        checkout,
        status,
        token,
        hotelId
      }
      const result = await this.service.createReserve(reserve);
      return res.status(201).json(result);
    }
  }
  
  export { ReserveController }
  