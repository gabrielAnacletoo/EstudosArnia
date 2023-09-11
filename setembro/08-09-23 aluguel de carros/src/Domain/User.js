import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String,  required: true, unique: true},
    password: {type: String,  required: true},
    rents: [{type: mongoose.Schema.Types.ObjectId, ref: "rents"}],
}, {timestamps: true}) 


const User = mongoose.model("userscars", UserSchema)
export {User}
