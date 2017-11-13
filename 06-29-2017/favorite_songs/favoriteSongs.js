var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Map-121790",
  database: "favorite_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

connection.query("SELECT * FROM favorite_songs", function(err, res) {
  if (err) throw err;
  console.log(res);
});

connection.query("INSERT INTO favorite_songs SET ?", {
  song: "Let it Be", 
  artist: "The Beetles",
  genre: "Classic Rock"
}, function (err,res){});

connection.query("INSERT INTO favorite_songs SET ?", {
  song: "Mr. Brightside",
  artist: "The Killers",
  genre: "Rock"
}, function (err,res){});

connection.query("UPDATE favorite_songs SET ? WHERE ?", [{
  song: "You are my Fire"
},{
  artist: "Backstreet Boys"
}], function (err,res){});

connection.query("DELETE FROM favorite_songs WHERE ?", {
  artist: "Britney Spears"
}, function(err,res){});

connection.query("DELETE FROM favorite_songs WHERE ?", {
  artist: "Backstreet Boys"
}, function(err,res){});

connection.query("SELECT * FROM favorite_songs", function(err,res){
  if (err) throw err;
  console.log(res);
});