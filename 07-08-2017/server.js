var http = require('http');
//allows us to handle requests
//node js allows you to create these connections so that you make network requests

var PORT = 8080; //for development we use 8080, for real world servers, you use 80

var server = http.createServer(function(request,response){
	switch (request.url){
		case '/':
			response.end("You are on Marissa'as server!" + request.url);
			break;
		case 'help':
			response.end("You need help. cAll 911");
			break;
		default:
			response.end("You are on Marissa's server!" + request.url);
			break;
	}
});
server.listen(PORT, function(){
	console.log("You are listening on port: "+ PORT)
});