
class UserRepository {
    constructor(user) {
      this.user = user;
         }
  
    async findByEmail(email){
        return this.user.findOne({email})
    }

    async findById(_id){
        return this.user.findById(_id)
    }

    async create(data){
        return this.user.create(data)
    }

    async findAll(){
        return this.user.find()
    }


  
}

export { UserRepository }