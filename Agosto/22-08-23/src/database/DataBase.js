
import mongoose from "mongoose"
import { config } from "dotenv"
config()

function initializeDatabase() {
  return mongoose.connect(process.env.DATABASE_URL, {
    dbName: 'BibliotecaArnia',
    useNewUrlParser: true,
    useUnifiedTopology: true
});
}

export { initializeDatabase }