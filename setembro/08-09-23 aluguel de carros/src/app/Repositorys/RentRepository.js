class RentRepository {
    constructor(model) {
        this.model = model;
    }

    async CreateRent(data) {
        return await this.model.create(data);
    }
    async findById(RentId) {
        console.log('id no repository - ', RentId)
        return await this.model.findById(RentId);
    }

    async findAll() {
        return await this.model.find();
    }

    async update(id, data) {
        return await this.model.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id) {
        return await this.model.findByIdAndDelete(id);
    }
}

export { RentRepository };
