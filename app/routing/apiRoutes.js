var friendData = require("../data/friends");

module.exports = function(app) {
    
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    //need to do app.post
    app.post("/api/friends", function(req, res) {
        friendData.push(res);
    });
}