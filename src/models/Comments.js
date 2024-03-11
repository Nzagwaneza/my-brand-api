const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    
    email : {
        type: String,
        required: true,
        unique: true
    },
    comment : {
        type: String,
        required: true 
    }
})

const Comments = mongoose.model("comment", commentSchema);

module.exports = Comments;

