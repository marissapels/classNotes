//allows us to receive information back in json form so that it is easy to manipulate
var bodyParser = require('body-parser');
//makes routing easier in node js
var express = require('express');
var path= require("path");

var app = express();
var PORT = process.env.PORT || 8080;
 
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json 
app.use(bodyParser.json());
 
//Include html routes in this server file, and the app that we are passing in this specific function, we want to use express

//We want to write the apiRoutes first because we are using the data in the apiRoutes to display in our html pages
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function(){
	console.log("App listening on PORT: "+PORT);
})