class ReserveRepository {
    constructor(model) {
        this.model = model;
    }

    async CreateReserve(data) {
        return await this.model.create(data);
    }
    async findById(ReserveId) {
        console.log('id no repository - ', ReserveId)
        return await this.model.findById(ReserveId);
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

export { ReserveRepository };
