import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String,  required: true, unique: true},
    password: {type: String,  required: true},
    reserve: [{type: mongoose.Schema.Types.ObjectId, ref: "reserve"}],
}, {timestamps: true}) 


const User = mongoose.model("User", UserSchema)
export {User}
