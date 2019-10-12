var express =require("express");

var app = express();
var db = require("./models")

var PORT = process.env.PORT || 3000;

var db=require("./models");
// console.log(db);
//setup app to parse post data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// var routes = require("./controllers/gamecontroller.js");
// app.use(routes);



db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  }).catch(err=>{
      throw err
  });

