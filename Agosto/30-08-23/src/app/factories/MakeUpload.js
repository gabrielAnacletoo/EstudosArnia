import { FileRepository } from "../Repository/UploadRepository.js";
import { FileUploadService } from "../Service/UploadService.js";
import { UploadController } from "../Controller/UploadController.js";
import { FileModel } from '../../domain/UploadSchema.js'



class MakeUpload {
    static getInstanceUpload(){
        const repositoryUpload = new FileRepository(FileModel);
        const serviceUpload = new FileUploadService(repositoryUpload);
        const controllerUpload = new UploadController(serviceUpload)
        return controllerUpload; 
    }
}

export {MakeUpload}