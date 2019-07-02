var friendData = require("../data/friends");

module.exports = function(app) {
    
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    //need to do app.post
    app.post("/api/friends", function(req, res) {
        var choiceArr = [];
        for (var i = 0; i < req.body.choice.length; i++) {
            choiceArr.push(parseInt(req.body.choice[i]));
        }
        var newFriendo = {
            name: req.body.name,
            photo: req.body.photo,
            choice: choiceArr
        }

        friendData.push(newFriendo);
    });
}