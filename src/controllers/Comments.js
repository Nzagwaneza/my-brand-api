const Comments = require('../models/Comments');

const newComment = async(req, res) => {
    try {
        const { email, comment} = req.body; 
        if(!email || !comment){
            return res.status(400).json({
                status: "Bad request",
                Message: "Missing fields",
                email, comment
            });
        }
    
        const newComment = {
            email,
            comment
        }
        await Comments.create(newComment);
    
        return res.status(201).json({
            Message: "Comment is created" 
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            Message: "Fail to comment :)"
        });
    }
};

const deleteComment = async(req, res) => { 
    try {
        const { id } = req.params;
        const comment = await Comments.findByIdAndDelete(id);
        if (!comment) {
            return res.status(404).json({
                Message: "Comment not deleted"
            });
        }

        return res.status(200).json({
            Message: "Comment deleted" 
        });
    } catch (error) {
        return res.status(500).json({
            Message: "Fail to delete comment"
        });
    }
};

module.exports = {
    newComment,
    deleteComment
};
