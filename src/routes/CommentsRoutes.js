const express = require('express');
const commentsController = require('../controllers/Comments'); 

const route = express.Router();

route.post('/comment', commentsController.newComment); 
route.delete('/comment/:id', commentsController.deleteComment); 

module.exports = route;
