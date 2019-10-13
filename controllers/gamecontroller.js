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



router.get("/api/getByGameId", function (req, res) {
    db.Game.findAll({
        include: [db.Resource]
    }).then(function (dbResult) {
        res.json(dbResult);
    });
});


// To save the game into DB 
router.post("/api/savegame", function (req, res) {
    db.User.findOne({
        where: {
            name: req.body.name
        }
    }).then(function (resDB) {
        var id;
        if (resDB === null) {
            db.User.create({
                name: req.body.name
            }).then(function (dbResult) {
                var user = dbResult;
                id=user.dataValues.id;
                saveGameData(id, req);
            }).catch(function (err) { throw err });
        }
        else
        {       
            var user = resDB;
            id=user.dataValues.id;            
            saveGameData(id, req);           
        }
    });
});

// Saves the game data
function saveGameData(userId, req) {
    db.Game.create({
        difficulty: req.body.difficulty,
        UserId: userId
    }).then(function (dbGame) {
        var game = dbGame;
        var k = 0;
        for (var i = 0; i < req.body.planets.length; i++) {
            db.GamesState.create({
                planetId: req.body.planets[i].id,
                happinessCount: req.body.planets[i].happinessCount,
                isHappy: req.body.planets[i].isHappy,
                isWon: req.body.isWon,
                GameId: game.dataValues.id
            }).then(function (dbGameStats) {
                var stats = dbGameStats;              
                // console.log("enterd the loop---" + k);
                for (var j = 0; j < req.body.planets[k].resources.length; j++) {
                    db.GameStateResources.create({
                        resourceId: req.body.planets[k].resources[j].id,
                        count: req.body.planets[k].resources[j].count,
                        GamesStateId: stats.dataValues.id
                    }).then(function (dbPost) {
                        // console.log("hello");
                    });
                }
                k++;
            })
        }      
        res.end();        
    });
}

router.put("/api/", function (req, res) {

});

router.delete("/api/", function (req, res) {

});

// Export routes for server.js to use.
module.exports = router;
