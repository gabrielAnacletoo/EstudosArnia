import { Crypt } from '../../utils/Crypt.js'
import { CreateToken } from '../../middleware/GenerateToken.js';

class UserService {
  constructor(repository) {
    this.repository = repository
  }

  async create(data) {
    const userAlreadyExists = await this.repository.findByEmail(data.email);
    if (userAlreadyExists) {
        return {
            error: true,
            message: "User already exists",
            status: 400
        };
    }

    const user = {
        ...data,
        password: Crypt.encrypt(data.password)
    };

    const createdUser = await this.repository.create(user);
    return createdUser;
}

 
  async listAllUser(){
    const res = await this.repository.listAllRep();
    return res;
  }

}

export { UserService }