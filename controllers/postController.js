let modelPost = require("../models/post_model");

module.exports = {
    show: function(req, res) {
        modelPost.find({}, function(err, items) {
            if(!err) {
                res.json(items)
            }else {
                res.sendStatus(500);
                console.log(err);
            }
        });
    }
};