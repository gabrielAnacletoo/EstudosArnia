import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    content: {type: String},
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    likes: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: "Comment"}],
}, {timestamps: true})

const Post = mongoose.model("Post", PostSchema);
export {Post}