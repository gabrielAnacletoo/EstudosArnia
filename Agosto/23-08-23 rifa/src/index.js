import { config } from "dotenv"
config()
import Express from "express";
import { DataBase } from "./database/DataBase.js";
import { router } from "./router.js";

DataBase.initialize();
const app = Express();
app.use(Express.json());
app.use(router);

app.listen(3333, () => console.log('Server Start:  OK'))