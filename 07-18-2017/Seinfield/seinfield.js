var express = require("express");
var mysql = require("mysql");

var app = express();

var port = 3000;

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Map-121790",
  database: "seinfeld_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

app.get("/cast",function(req,res){
	connection.query("SELECT * FROM actors", function(err,results){
		var html = "<h1> Seinfeld Characters </h1>";

		html += "<ul>";

		for(var i=0; i<results.length;i++){
			html+="<li><p> ID: " + results[i].id + "</p>";
			html+="<p> Name: "+ results[i].name+"</p>";
			html+="<p> Coolness Points: "+ results[i].coolness_points+"</p>";
		}

		html+= "</ul>";
		res.send(html);
	});
});

app.get("/coolness-chart",function(req,res){
	connection.query("SELECT * FROM actors ORDER BY coolness_points", function(err,results){
		var html = "<h1> Seinfeld Characters </h1>";

		html += "<ul>";

		for(var i=0; i<results.length;i++){
			html+="<li><p> ID: " + results[i].id + "</p>";
			html+="<p> Name: "+ results[i].name+"</p>";
			html+="<p> Coolness Points: "+ results[i].coolness_points+"</p>";
		}

		html+= "</ul>";
		res.send(html);
	});
});

app.get("/attitude-chart/:att", function(req, res) {
  connection.query("SELECT * FROM actors where attitude = ?", [req.params.att], function(err, result) {
    var html = "<h1>Actors With an Attitude of " + req.params.att + "</h1>";

    html += "<ul>";

    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p> Name: " + result[i].name + "</p>";
      html += "<p> Coolness Points: " + result[i].coolness_points + "</p>";
      html += "<p>Attitude: " + result[i].attitude + "</p></li>";
    }

    html += "</ul>";

    res.send(html);
  });
});

app.listen(port, function(){
	console.log("Listening on port: "+port);
});