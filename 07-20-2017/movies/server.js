var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();
var port = 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(methodOverride("_method"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Map-121790",
  database: "movies_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

app.get("/", function(req, res){
	connection.query("SELECT * FROM movies;", function(error,data){
		if (error) {throw error};
		res.render("index", {list: data});
	});
});

app.post("/", function(req,res){
	connection.query("INSERT INTO movies (movie) values (?)", [req.body.newMovie], function(err,result){
		if (err) throw err;

    res.redirect("/");
	});
});

app.delete("/:id", function(req,res){
	connection.query("DELETE FROM movies WHERE id = (?)",[req.params.id], function(err,result){
		if (err) {
      		throw err;
    	}

    res.redirect("/");
	});
});

app.put("/", function(req,res){
	connection.query("UPDATE movies SET movie = ? WHERE id = ?",[req.body.newMovie, req.body.id], function(err,result){
		if (err) {
      		throw err;
    	}

    res.redirect("/");		
	});
});

app.listen(port, function(){
	console.log("listening at port: "+port);
});