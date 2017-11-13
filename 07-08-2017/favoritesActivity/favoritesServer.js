// Dependencies
var http = require("http");
var fs = require("fs");
//this is used to help parse the URL
var url = require("url");

// Set our port to 8080
var PORT = 8080;

// Create our server
var server = http.createServer(handleRequest);

function handleRequest(req, res) {

  // Capturing the url the request is made to.
  var urlParts = url.parse(req.url);

  // When we visit different urls, the switch statement call on different functions.
  switch (urlParts.pathname) {
    case"/home":
	    displayIndex(urlParts.pathname, req, res);
	    break;
	case"/food":
		displayFood(urlParts.pathname, req, res);
		break;
	case "/frameworks":
		displayFrameworks(urlParts.pathname, req, res);
	  	break;
	case "/movies":
		displayMovies(urlParts.pathname, req, res);
	  	break;
	default:
		displayIndex(urlParts.pathname, req, res);
	    break;
  }
}

// When we visit the "http://localhost:8080/" path, this function is run.
function displayIndex(url, req, res) {
    fs.readFile(__dirname + "/home.html", function(err, data) {
	    res.writeHead(200, { "Content-Type": "text/html" });
	    res.end(data);
  	});
}
function displayFood(url, req, res) {
    fs.readFile(__dirname + "/food.html", function(err, data) {
	    res.writeHead(200, { "Content-Type": "text/html" });
	    res.end(data);
  	});
}
function displayFrameworks(url, req, res) {
    fs.readFile(__dirname + "/frameworks.html", function(err, data) {
	    res.writeHead(200, { "Content-Type": "text/html" });
	    res.end(data);
  	});
}
function displayMovies(url, req, res) {
    fs.readFile(__dirname + "/movies.html", function(err, data) {
	    res.writeHead(200, { "Content-Type": "text/html" });
	    res.end(data);
  	});
}

// Starts our server
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
