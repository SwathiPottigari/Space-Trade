var express =require("express");

var app = express();
var db = require("./models")

var session = require("express-session");
require('dotenv').config();

var PORT = process.env.PORT || 3000;

var db=require("./models");
// console.log(db);
//setup app to parse post data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var routes = require("./controllers");

app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true }));
app.use('/',routes);

// Static directory
app.use(express.static(__dirname + '/public'));

db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  }).catch(err=>{
      throw err
  });

