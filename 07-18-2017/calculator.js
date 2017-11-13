//manages packages to be used in file
var bodyParser = require("body-parser");
var express = require("express");
var path = require ("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



// app.get("/add/:firstNum/:secondNum", function(req,res){
// 	res.json(parseInt(req.params.firstNum)+parseInt(req.params.secondNum));
// });

// app.get("/substract/:firstNum/:secondNum", function(req,res){
// 	res.json(parseInt(req.params.firstNum)-parseInt(req.params.secondNum));
// });

// app.get("/multiply/:firstNum/:secondNum",function(req,res){
// 	res.json(parseInt(req.params.firstNum)*parseInt(req.params.secondNum));
// });

// app.get("/divide/:firstNum/:secondNum",function(req,res){
// 	res.json(parseInt(req.params.firstNum)/parseInt(req.params.secondNum));
// });



app.get("/:operations/:firstNum/:secondNum",function(req,res){

	var val1=parseInt(req.params.firstNum);
	var val2=parseInt(req.params.secondNum);
	var result;

	switch (req.params.operations) {
		case "add":
			result=val1+val2;
			break;

		case "substract":
			result=val1-val2;
			break;

		case "multiply":
			result=val1*val2;
			break;
		case "divide":
			result=val1/val2;
			break;
		default:
			result="Sorry that's not an option!";
		}

	res.send(result.toString());
})




app.listen(PORT, function(){
	console.log("App listening on PORT: "+PORT);
});