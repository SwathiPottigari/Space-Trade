var express = require("express");

var router = express.Router();
var game = require('./game')

// Import the model (cat.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    //This is a test to validate routing
    game.saveGame();
    res.send("Foo")
});

router.post("/api/savegame", function(req, res) {
    console.log("saving game here");
});

router.put("/api/", function(req, res) {

});

router.delete("/api/", function(req, res) {

});

// Export routes for server.js to use.
module.exports = router;
