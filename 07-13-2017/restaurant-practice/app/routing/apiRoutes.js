var tableData = require("../data/tableData.js");
var waitinglistData = require("../data/waitinglistData.js");


//the app we put in parenthesis represents express

//whenever you go to this URL, can you display the data in jsob format.
module.exports = function(app){
	app.get("/api/tables", function(req,res){
		res.json(tableData);
	});

	app.get("/api/waitlist", function(req,res){
		res.json(waitinglistData);
	});

	//When you try to post to this URL, I want you to run this function. We are going to mark that response as true or false depending on where we push that data
	app.post("/api/tables", function(req,res){
		if(tableData.length<5){
			tableData.push(req.body);
			//boolean value so we can trigger a different message to the user.
			res.json(true);
		}
		else{
			waitinglistData.push(req.body);
			res.json(false);
		}
	});

	app.post("/api/clear", function(){
		tableData=[];
		waitinglistData=[];
		console.log(tableData);
		console.log(waitinglistData);
	});
}