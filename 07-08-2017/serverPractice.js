var http = require('http');

var PORTgood=7000;
var PORTbad=7500;

var serverGood = http.createServer(function(request,response){
	switch (request.url){
		case '/1':
			response.end("You are so nice");
			break;
		case '/2':
			response.end("You look GOOD today!");
			break;
		default:
			response.end("Default for nice page");
			break;
	}
});

var serverBad = http.createServer(function(request,response){
	switch (request.url){
		case '/1':
			response.end("You are so mean");
			break;
		case '/2':
			response.end("You look ugly");
			break;
		default:
			response.end("Default for mean page");
			break;
	}
});

serverGood.listen(PORTgood, function(){
	console.log("You are listening on port: "+ PORTgood);
});
serverBad.listen(PORTbad, function(){
	console.log("You are listening on port: "+ PORTbad);
});