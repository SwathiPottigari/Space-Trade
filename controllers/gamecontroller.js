var express = require("express");

var moment=require("moment");

var router = express.Router();
var game = require('./game')

var path = require("path");

// Import the model to use its database functions.
var db = require("../models");

// HTML FILES CALLS

// Loads the index.html file on hitting the url


router.get("/api/startPage", function (req, res) {
    if(req.session.hasOwnProperty('user')){
        res.sendFile(path.join(__dirname, "../views/index.html"));
    }
    else{
        res.sendFile(path.join(__dirname, "../views/login.html"));
    }
    
});

router.get("/api/selectDifficulty", function (req, res) {    
    if(req.session.hasOwnProperty('user')){
        res.sendFile(path.join(__dirname, "../views/selectgame.html"));
    }
    else{
        res.sendFile(path.join(__dirname, "../views/login.html"));
    }
});




// API CALLS

// Retrieves the data required by initial game
router.post("/api/createInitialGame", function (req, res) {
    saveGameData(req,res);
});


// Retrieves the data depending on the User ID
router.get("/api/getByUserId", function (req, res) {    
        var queryData = {};
        db.Game.findAll({
            limit: 1,
            where: {
                UserId:req.session.user.id 
            },
            order: [['id', 'DESC']],
        }).then(function (gameRes) {
            console.log(gameRes);
            var data = gameRes;
            queryData.game = data[0].dataValues;
            db.GamesState.findAll({                
                raw: false,
                where: {
                    GameId: data[0].dataValues.id
                },
                order: [['id', 'DESC']],
                include: [db.GameStateResources,db.Planet],
                limit: 5

            }).then(function (gameRes) {
                var planets = [];
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
    // })
});


// To save the game into DB 
router.post("/api/savegame", function (req, res) {
    saveGameData(req,res);
});



// Saves the game data
function saveGameData(req,res) {
    db.Game.create({
        difficulty: req.body.difficulty,
        isWon: req.body.isWon,
        UserId: req.session.user.id
    }).then(function (dbGame) {
        var game = dbGame;
        console.log(game);
        var k = 0;
        for (var i = 0; i < req.body.planets.length; i++) {
            db.GamesState.create({                
                happinessCount: req.body.planets[i].happinessCount,
                isHappy: req.body.planets[i].isHappy,                
                GameId: game.dataValues.id,
                PlanetId: req.body.planets[i].id
            }).then(function (dbGameStats) {
                var stats = dbGameStats;
                console.log(stats);
                // console.log("enterd the loop---" + k);
                for (var j = 0; j < req.body.planets[k].resources.length; j++) {
                    db.GameStateResources.create({
                        resName:req.body.planets[k].resources[j].resName,
                        // resourceId: req.body.planets[k].resources[j].id,
                        resCount: req.body.planets[k].resources[j].resCount,
                        resValue: req.body.planets[k].resources[j].resValue,
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

router.put("/api/trade", function (req, res) {
    console.log("recieved a request...");
});

router.put("/api/updateGame", function (req, res){
    db.Game.update({
        difficulty:req.body.difficulty,
        isWon:req.body.isWon,
        updatedAt:moment(Date.now()).format("YYYY-MM-DD hh:mm:ss")
    },
        {
          where: {
            id: req.body.id
          }
        })
        .then(function(dbGame) {
            var k = 0;
         var gameStateIds=[];
            db.GamesState.findAll({
                where:{
                    GameId: req.body.id,
                }
            }).then(function(dbGameStateID){
                for (var i = 0; i < dbGameStateID.length; i++) {
                    gameStateIds.push(dbGameStateID[i].dataValues.id);
                }   
                for (var i = 0; i < req.body.planets.length; i++) {
                    db.GamesState.update({
                        happinessCount: req.body.planets[i].happinessCount,
                        isHappy: req.body.planets[i].isHappy,                
                        updatedAt:moment(Date.now()).format("YYYY-MM-DD hh:mm:ss")
                    },
                        {
                          where: {
                            GameId: req.body.id,
                            PlanetId:req.body.planets[i].id
                          }
                        }).then(function (dbGameStats) {
                            var stats = dbGameStats;
                            // console.log(stats);
                            // console.log("enterd the loop---" + k);
                            for (var j = 0; j < req.body.planets[k].resources.length; j++) {
                                db.GameStateResources.update({
                                    resCount: req.body.planets[k].resources[j].resCount,
                                    updatedAt:moment(Date.now()).format("YYYY-MM-DD hh:mm:ss")
                                },
                                    {
                                      where: {
                                        GamesStateId: gameStateIds[k],
                                        resName:req.body.planets[k].resources[j].resName
                                      }
                                    }
                                ).then(function (dbPost) {
                                    // console.log("hello");
                                });
                            }
                            k++;
                        })    
                
            }
            });
                
           res.json(req.session.user.id); 
        });
});

router.delete("/api/", function (req, res) {

});

// Export routes for server.js to use.
module.exports = router;
