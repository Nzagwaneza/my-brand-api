// https://www.npmjs.com/package/multer

const express = require('express')
const blogsController = require('../controllers/Blogs');
const upload = require('../utils/upload');
const verifyAuth = require('../middlewares/auth');



const route = express.Router()


route.post("/new", upload.fields([{name: "image1", maxCount: 1},{name: "image2", maxCount: 1} ]), verifyAuth, blogsController.newBlog);
route.put("/update/:id", blogsController.updateBlog);
route.delete("/delete/:id", blogsController.deleteBlog);



module.exports = route