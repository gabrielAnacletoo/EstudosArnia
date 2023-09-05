import mongoose from 'mongoose'

const CommentSchema = new mongoose.Schema({
    content: {type: String}
}, {timestamps: true})

const Comment = mongoose.model("Comment", CommentSchema);
export {Comment}