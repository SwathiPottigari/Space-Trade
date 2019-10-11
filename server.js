var express = require('express');

var app = express();

var PORT = process.env.PORT || 3000;

//setup app to parse post data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var routes = require("./controllers/gamecontroller.js");
app.use(routes);

app.listen(PORT,function(){
    console.log('server running on port ' + PORT)
});