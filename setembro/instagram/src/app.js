import path from "path"
import url from "url"
import express from "express"
import dotenv from "dotenv"
dotenv.config()

import { DataBase } from "./database/Database.js"
import { router } from "./router.js"

DataBase.initialize()

const port = process.env.PORT
const app = express()

// const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

// app.use("/profiles", express.static(path.resolve(__dirname, "..", "uploads")))
app.use(express.json())

app.use(router)

app.listen(port, () => console.log(`Server running at ${port}`))