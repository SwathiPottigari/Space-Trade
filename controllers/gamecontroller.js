var express = require("express");

var router = express.Router();
var game = require('./game')

var path = require("path");

// Import the model to use its database functions.
var db = require("../models");

// HTML FILES CALLS

// Loads the index.html file on hitting the url
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
});




// API CALLS

router.get("/api/getInitialGame", function (req, res) {
    db.Planet.findAll({
        include: [db.Resource]
    }).then(function (dbResult) {
        res.json(dbResult);
    });
});


// To save the game into DB 
router.post("/api/savegame", function (req, res) {
    db.User.create({
        name: req.body.name
    }).then(function (dbResult) {
        var user = dbResult;
        db.Game.create({
            difficulty: req.body.difficulty,
            UserId: user.dataValues.id
        }).then(function (dbGame) {
            var game = dbGame;
            for (var i = 0; i < req.body.planets.length; i++) {
                db.GamesState.create({
                    planetId: req.body.planets[i].id,
                    happinessCount: req.body.planets[i].happinessCount,
                    isHappy: req.body.planets[i].isHappy,
                    isWon: req.body.isWon,
                    GameId: game.dataValues.id
                }).then(function (dbGameStats) {
                    var stats = dbGameStats;
                    for (var j = 0; j < req.body.planets[i].resources.length; j++) {
                        db.GameStateResources.create({
                            resourceId:req.body.planets[i].resources[j].id,
                            count: req.body.planets[i].resources[j].count,
                            GamesStateId: stats.dataValues.id
                        })
                            .then(function (dbPost) {
                                res.json(dbPost);
                            });
                    }
                })
            }
        });
    }).catch(function (err) { throw err });
});

router.put("/api/", function (req, res) {

});

router.delete("/api/", function (req, res) {

});

// Export routes for server.js to use.
module.exports = router;
