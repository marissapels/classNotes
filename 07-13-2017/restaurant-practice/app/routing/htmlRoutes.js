var path= require("path");


//whenever we get this URL for the user, we want you to execute this funciton. This function sends the user index.html.
module.exports = function(app) {
	app.get("/tables", function(req,res){
		res.sendFile(path.join(__dirname + "/../public/tables.html"));
	});
	app.get("/reserve", function(req,res){
		res.sendFile(path.join(__dirname + "/../public/reserve.html"));
	});	
	
	//app.use can be used when you have not defined any other part of the URL. If the user types in anything other than /tables or /reserve, it will take them to the home page.
	app.use(function(req,res){
		res.sendFile(path.join(__dirname + "/../public/home.html"));
	});
}