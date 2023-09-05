import { Router } from "express";
import { MakeTarefas } from "./factories/MakeTarefas.js";
import { AuthMiddleWare } from "./middleware/auth.js";
import { createToken } from "./middleware/createToken.js";

const router = Router();
const controller = MakeTarefas.getInstance();

router.get("/user/login", createToken);
router.get("/allusers", controller.ListAllUserController.bind(controller));
router.post("/users", controller.CreateUserController.bind(controller));
router.post("/tarefas", controller.CreateTarefaController.bind(controller));
router.get("/users/tarefas/:id", AuthMiddleWare , controller.TarefasController.bind(controller));




export { router }