// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Star Wars Characters (DATA)
// =============================================================
var tables = [];
var reservations = [];
var waitlist = [];

// Routes
// =============================================================

// Routes to different pages
app.get("/home.html", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables.html", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reservation.html", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});

// Routes to API links to JSON data
app.get("/api/tables", function(req, res) {
  res.json(reservations);
});

app.get("/api/waitlist", function(req, res) {
  res.json(waitlist);
});



// Create New Characters - takes in JSON input
app.post("/api/tables", function(req, res) {
  var newreservation = req.body;

  console.log(newreservation);
  reservations.push(newreservation);
  res.json(newreservation);

  //res.json(newReservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
