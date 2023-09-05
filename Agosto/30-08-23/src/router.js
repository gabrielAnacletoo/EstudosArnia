import { Router } from 'express'
import { MakeUser } from './app/factories/MakeUser.js'
import { AuthMiddleWare } from './middleware/AuthToken.js';
//upload
import { MakeUpload } from './app/factories/MakeUpload.js';
import { UploadMulter } from './middleware/MiddlewareMulter.js';

const router = Router();
const controller = MakeUser.getInstance();
const controllerUp = MakeUpload.getInstanceUpload();

//public router
// router.get("/", controller.bind())
//register
router.post("/auth/register", controller.create.bind(controller))
//login
router.get("/auth/login", controller.create.bind(controller))
//listar todos
router.get("/users", controller.listAllUser.bind(controller))
//upload
router.post("/upload", AuthMiddleWare, UploadMulter , controllerUp.handleUpload.bind(controllerUp))


export { router }