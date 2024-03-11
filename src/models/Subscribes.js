const mongoose = require('mongoose');

const subscribeSchema = new mongoose.Schema({
   
    email: {
        type: String,
        required: true,
        unique: true
    }

})

const Subscribes = mongoose.model("Subscribe", subscribeSchema);

module.exports = Subscribes;

