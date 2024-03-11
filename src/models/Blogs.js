const mongoose = require('mongoose');



const blogsSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true
    },

    summary: {
        type: String,
        required: true
    }, 

    desc : {
        type: String,
        required: true
    },

    image1 : {
        type: String,
        required: true
    }, 

    image2 : {
        type: String,
        required: true
    }, 
    
    likes: {
        type: [String],
        default: []
    }

})

 const Blogs = mongoose.model("Blogs", blogsSchema);

module.exports = Blogs