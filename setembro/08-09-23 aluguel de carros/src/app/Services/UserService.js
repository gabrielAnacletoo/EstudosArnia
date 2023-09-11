import { Crypt } from "../../utils/Crypt.js";


class UserService {
    constructor(repository) {
        this.repository = repository
    }

    async create(data) {
        const userAlreadyExists = await this.repository.findByEmail(data.email)
        if (userAlreadyExists) {
            return { error: 'User Already Exists', status: 401 }
        }

        const hashedPassword = Crypt.encrypt(data.password);
        data.password = hashedPassword;
        return await this.repository.create(data)
    }


    async findAll() {
        return await this.repository.findAll();
    }


    async findByRentByid(userId) {
        const result = await this.repository.findByRentByid(userId);
        if (!result) {
            return { error: 'User has no bookings', status: 404 };
        }

        return { message: "This user's rents", rents: result.rents };
    }

}
export { UserService }