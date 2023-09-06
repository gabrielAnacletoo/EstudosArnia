class RifaRepository {
    constructor(model){
        this.model = model;
    }

    async create(data){
        const rifa = new this.model(data);
        return await rifa.save();
    }

    //gerador de valor
    async ValueDrawn(id){
        const rifa = await this.model.findById(id);

        if (!rifa) {
           console.log('Rifa não encontrada');
        }

        if (rifa.valueGenerated) {
            console.log('O valor gerado já foi definido');
        }

        const valorGerado = Math.floor(Math.random() * (rifa.maxValue - rifa.minValue + 1)) + rifa.minValue;

        rifa.valueGenerated = valorGerado;

        await rifa.save();

        return valorGerado;
    }

    //buscar valor de rifa
    async value(id){
        const rifa = await this.model.findById(id);

        if (!rifa) {
            console.log('Rifa não encontrada');
        }

        if (!rifa.valueGenerated) {
            console.log('O valor gerado ainda não foi definido');
        }

        return rifa.valueGenerated;
    }

    async listAll(){
        return await this.model.find({});
    }
}

export { RifaRepository };
