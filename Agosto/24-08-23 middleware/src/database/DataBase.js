import mongoose, { connect } from "mongoose";

class DataBase {
    static async initialize(){
            mongoose.connection.once("open", () => {
                console.log('Connection: ok')
            })
            await connect(process.env.DATABASE_URL)
    }
}

export {DataBase}