import mongoose from "mongoose"

const Post = new mongoose.Schema({
    name: {type: String, required: true},
    prompt: {type: String, required: true},
    value: {type: String, required: true},
})

const PostSchema = mongoose.model('Post', Post)

export default Post