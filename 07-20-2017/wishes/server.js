var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = 3000;

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
  database: "wishes_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

// Root get route
app.get("/", function(req, res) {
  connection.query("SELECT * FROM wishes;", function(err, data) {
    if (err) throw err;
    res.render("index", { list: data });
  });
});

// Post route -> back to home
app.post("/", function(req, res) {
  connection.query("INSERT INTO wishes (wish) VALUES (?)", [req.body.newWish], function(err, result) {
    if (err) throw err;

    res.redirect("/");
  });
});

app.listen(port, function(){
  console.log("listening on port: "+port);
});
