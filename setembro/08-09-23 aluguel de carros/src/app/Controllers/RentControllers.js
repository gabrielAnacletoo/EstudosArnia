

class RentController {
    constructor(service) {
      this.service = service
    }
  
    async RentController(req, res) {
      const { withdrawalDate, returnDate, dealershipID } = req.body
      const token = req.headers.authorization;
      const rent = {
        withdrawalDate,
        returnDate,
        token,
        dealershipID
      }
      const result = await this.service.CreateRent(rent);
      if('error' in result ){
        return res.status(result.status).json(result.error);
      }
      return res.status(201).json(result)
    }


    async CancelRent(req,res){
      const {id} = req.params
      console.log('reserve id controller - ' , id)
      const result = await this.service.CancelRentService(id);
      if('error' in result){
        return res.status(result.status).json(result.error)
      }
      return res.status(200).json(result.message)
    }
  }
  
  export { RentController }
  