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

// Retrieves the data required by initial game
router.get("/api/getInitialGame", function (req, res) {
    db.Planet.findAll({
        include: [db.Resource]
    }).then(function (dbResult) {
        res.json(dbResult);
    });
});


// Retrieves the data depending on the User ID
router.get("/api/getByUserId/:name", function (req, res) {
    var object={};
    db.User.findOne({
        where: {
            name: req.params.name
        }
    }).then(function (resDB) {
        // db.Game.findOne
        var queryData = {};
        var user = resDB;
        db.Game.findAll({
            limit: 1,
            where: {
                UserId: user.dataValues.id
            },
            order: [['id', 'DESC']],
        }).then(function (gameRes) {
            var data = gameRes;
            queryData.game = data[0].dataValues;
            db.GamesState.findAll({
                limit: 5,
                raw: false,
                where: {
                    GameId: data[0].dataValues.id
                },
                order: [['id', 'DESC']],
                include: [db.GameStateResources]
            }).then(function (gameRes) {

                // console.log(gameRes[0].dataValues.GameStateResources[0].dataValues);
                var planets = [];
                var resources = [];
                for (var i = 0; i < gameRes.length; i++) {
                    planets[i] = gameRes[i].dataValues;
                    planets[i].Resources = [];
                    for (var j = 0; j < gameRes[i].dataValues.GameStateResources.length; j++) {
                        planets[i].Resources[j] = planets[i].GameStateResources[j].dataValues;
                    }
                }
                for (var i = 0; i < planets.length; i++) {
                    delete planets[i].GameStateResources;
                }
                queryData.planets = planets;
                res.json(queryData);
            })
        });      
    })
});


// To save the game into DB 
router.post("/api/savegame", function (req, res) {
    db.User.findOne({
        where: {
            name: req.body.name
        }
    }).then(function (resDB) {
        var id;
        console.log(resDB);
        if (resDB === null) {
            db.User.create({
                name: req.body.name
            }).then(function (dbResult) {
                var user = dbResult;
                id = user.dataValues.id;
                saveGameData(id, req);
            }).catch(function (err) { throw err });
        }
        else {
            var user = resDB;
            id = user.dataValues.id;
            saveGameData(id, req);
        }
        res.end();
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
