import Express from "express";
import { router } from "./Router/BlogRouter.js";

const app = Express();
app.use(Express.json());
app.use(router);
app.listen(3333, () => console.log('Server Start at port 3333.'));


