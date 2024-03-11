const express = require('express');
const subscribeController = require('../controllers/Subscribes');



const route = express.Router()

route.post('/subscribe', subscribeController.newSubscribe);
route.get('/all', subscribeController.getAllSubscribers);
route.delete('/subscribe/:id', subscribeController.deleteSubscribe); 

module.exports = route;