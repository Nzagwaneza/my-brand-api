const Blogs = require('../models/Blogs');


const newBlog = async(req, res) => {
    try {
        const { title, summary, desc, } = req.body;
        // const image  = req.file? req.file.path : null
        const {image1, image2} = req.files;

        console.log({image1, image2})

        if(!title || !summary|| !image1 || !image2  || !desc){
            return res.status(400).json({
                status: "Bad request",
                Message: "Missing fields",
                title, summary, image1, image2, desc
            });
        }
    
        // blog object
        const newBlog = {
            title,
            summary,
            image1: image1[0].path,
            image2: image2[0].path,
            desc
        }
        // save data
        // await Blogs.create(newBlog)
        await Blogs.create(newBlog)
    
        return res.status(201).json({
            Message: "Blog is created"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            Message: "Fail to create blog :)"
        })
    }
}

const updateBlog = async(req, res) =>{
    try {
    const {title, summary, image1, image2, desc} = req.body;
    const {id} = req.params;

    // check if blog exist
    const blog = await Blogs.findByIdAndUpdate(id, {title, summary, image1, image2, desc}, {new: true});
    if (!blog) {
        return res.status(404).json({
            Message: "Blog not updated"
        })
    }

    return res.status(200).json({
        Message: "Blog updated"
    })
    } catch (error) {
        return res.status(500).json({
            Message: "Fail to update Blog "
        })
    }
}

const deleteBlog = async(req, res) =>{
    try {
    const {id} = req.params;

    // check if blog exist
    const blog = await Blogs.findByIdAndDelete(id);
    if (!blog) {
        return res.status(404).json({
            Message: "Blog not deleted"
        })
    }

    return res.status(200).json({
        Message: "Blog deleted"
    })
    } catch (error) {
        return res.status(500).json({
            Message: "Fail to delete Blog "
        })
    }
}


module.exports = {
    newBlog,
    updateBlog,
    deleteBlog
}