import Express from "express";
import { router } from "./Router/Router.js";

const app = Express();
app.use(Express.json());
app.use(router);

app.listen(3333, () => console.log('Server started on port 3333'));
