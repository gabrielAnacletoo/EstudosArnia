class FileUploadService {
    constructor(repository) {
      this.repository = repository;
    }
  
    uploadFile(fileName) {
      this.repository.saveFile(fileName);
    }
  
    getUploadedFiles() {
      return this.repository.getFiles();
    }
  }
  
  export {FileUploadService};
  