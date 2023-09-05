

class UserRepository{
  constructor(model){
    this.model = model
  }

    async findByEmail(email){
      return this.model.findOne({email})
    }

    async create(data){
        return this.model.create(data)
        
    }

    async listAllRep(){
      return this.model.find();
    }

}
export {UserRepository}