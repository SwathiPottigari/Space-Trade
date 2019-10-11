var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
//var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
});

router.post("/api/", function(req, res) {
});

router.put("/api/", function(req, res) {
});

router.delete("/api/", function(req, res) {
});

// Export routes for server.js to use.
module.exports = router;
