import express from 'express'
import dotenv from 'dotenv'
import { DatabaseConfig } from './Database/Database'
import { router } from './Router'
dotenv.config()
DatabaseConfig.initialize();

const port = process.env.PORT;
const app = express()

app.use(express.json())
app.use(router)
app.listen(port, () => console.log(`Server start at ${port}`))
