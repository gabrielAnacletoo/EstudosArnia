import mongoose, { mongo } from 'mongoose';


class DataBase {
    static initialize(){
        mongoose.connection.once("open", () => {
            console.log('Databas was connect')
        })
        mongoose.connect(process.env.DATABASE_URL)
    }
}

export { DataBase }