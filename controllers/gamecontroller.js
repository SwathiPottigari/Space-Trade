var express = require("express");

var router = express.Router();
var game = require('./game')

var path = require("path");

// Import the model to use its database functions.
var db = require("../models");

// HTML FILES CALLS

// Loads the index.html file on hitting the url
router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
});




// API CALLS

router.get("/api/getInitialGame", function(req, res) {
    
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
