
class UserRepository {
    constructor(user) {
        this.user = user;
    }

    async findByEmail(email) {
        return this.user.findOne({ email })
    }

    async FindById(_id) {
        const result = this.user.findOne({_id});
        return result;
    }

    async create(data) {
        return await this.user.create(data)
    }

    async findAll() {
        return this.user.find()
    }

    async findByReserversByid(userId) {
        const user = await this.user.findOne({ _id: userId }).populate({
            path: 'reserve',
            populate: {
                path: 'hotel',
                model: 'Hotel' // Nome do modelo de Hotel
            }
        });
        return { message: "This user's bookings", reserves: user.reserve };

    }
}

export { UserRepository }