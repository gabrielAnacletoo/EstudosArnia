
class UserRepository {
    constructor(user) {
        this.user = user;
    }

    async findByEmail(email) {
        return this.user.findOne({ email })
    }

    async findById(_id) {
        return this.user.findById(_id)
    }

    async create(data) {
        return await this.user.create(data)
    }

    async findAll() {
        return this.user.find()
    }

    async findByRentByid(userId) {
        const user = await this.user.findOne({ _id: userId }).populate({
            path: 'rents',
            populate: {
                path: 'dealership',
                model: 'dealerships' // Nome do modelo 
            }
        });
        return { message: "This user's rents", rents: user.rents };

    }
}

export { UserRepository }