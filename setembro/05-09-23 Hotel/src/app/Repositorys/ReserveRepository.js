class ReserveRepository {
    constructor(model) {
        this.model = model;
    }

    async CreateReserve(data) {
        return await this.model.create(data);
    }
    async findById(id) {
        return this.model.findById(id);
    }

    async findAll() {
        return this.model.find();
    }

    async update(id, data) {
        return this.model.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id) {
        return this.model.findByIdAndDelete(id);
    }
}

export { ReserveRepository };
