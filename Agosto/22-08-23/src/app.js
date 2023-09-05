import { config } from "dotenv";
config()
import express from 'express';
import { router } from "./router/router.js"

const app = express();
app.use(express.json());
app.use(router);

const port = process.env.PORT;
app.listen(port, () => console.log('Server running at port 3333'))