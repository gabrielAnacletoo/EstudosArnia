

class PhotoRepository {
    constructor(model){
        this.model = model
    }

    async create(data){
        return this.model.create(data)
    }
}

export { PhotoRepository }