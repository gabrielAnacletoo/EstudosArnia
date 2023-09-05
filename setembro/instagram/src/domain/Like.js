import mongoose from 'mongoose'

const LikeSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
}, {timestamps: true})

const Likes = mongoose.model("Likes", LikeSchema)
export{Likes}