var express = require("express");
var router = express.Router();
var path = require('path');
var authRoutes = require('./authorization');
var apiRoutes=require('./gamecontroller');

router.use('/auth',authRoutes);
router.use(apiRoutes);

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/login.html"));
});

module.exports = router;