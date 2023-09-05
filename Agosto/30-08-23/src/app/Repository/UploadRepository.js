class FileRepository {
    constructor(model) {
      this.model = model;
    }
  
    async saveFile(fileName) {
      try {
        const file = new this.model({ fileName });
        await file.save();
      } catch (error) {
        throw new Error('Erro ao salvar o arquivo: ' + error.message);
      }
    }
  
    async getFiles() {
      try {
        const files = await this.model.find().exec();
        return files.map(file => file.fileName);
      } catch (error) {
        throw new Error('Erro ao obter os arquivos: ' + error.message);
      }
    }
  }
  
  export {FileRepository};
  