

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


    async CancelReserve(req,res){
      const {ReserveId} = req.params
      console.log('reserve id controller - ' , ReserveId)
      const result = await this.service.CancelReserveService(ReserveId);
      if('error' in result){
        return res.status(result.status).json(result.error)
      }
      return res.status(200).json(result.message)
    }
  }
  
  export { ReserveController }
  