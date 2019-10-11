var express = require('express');

var app = express();
var db = require("./models")

var PORT = process.env.PORT || 3000;

//setup app to parse post data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var routes = require("./controllers/gamecontroller.js");
app.use(routes);

 // Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
});