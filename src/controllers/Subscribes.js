const Subscribes = require('../models/Subscribes');

const newSubscribe = async(req, res) => {
    try {
        const { email} = req.body; 
        if(!email){
            return res.status(400).json({
                status: "Bad request",
                Message: "Missing fields",
                email
            });
        }
    
        const newSubscribe = {
            email
        }
        await Subscribes.create(newSubscribe);
    
        return res.status(201).json({
            Message: "Subscription is done successfully" 
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            Message: "Fail to subscribe:)"
        });
    }
};

const deleteSubscribe = async(req, res) => { 
    try {
        const { id } = req.params;
        const subscribe = await Subscribes.findByIdAndDelete(id);
        if (!subscribe) {
            return res.status(404).json({
                Message: "Subscriber not deleted"
            });
        }

        return res.status(200).json({
            Message: "Subscriber deleted" 
        });
    } catch (error) {
        return res.status(500).json({
            Message: "Fail to delete subscriber"
        });
    }
};

const getAllSubscribers  = async(req, res) =>{
    try {
        const subscribe = await Subscribes.find();
        if (!subscribe) {
            return res.status(404).json({
                status: "Not found",
                Message: "No Subscribers found :)"
            })
        }

        // Subscribers found
        return res.status(200).json({
            status: "OK",
            subscribe: subscribe
        })
    } catch (error) {
        return res.status(500).json({
            Message: "Fail to fetch Subscribers :)"
        })
    }
}

module.exports = {
    newSubscribe,
    deleteSubscribe,
    getAllSubscribers
};
