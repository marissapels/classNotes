var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "greatbay_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

function promptUser(){
	connection.query("SELECT * FROM items", function(err, res) {
	  for (var i = 0; i < res.length; i++) {
	    console.log(res[i].id + " | " + res[i].Item + " | " + res[i].startingBid + " | " + res[i].quantity);
	  }
	  console.log("-----------------------------------");
	});
    inquirer.prompt([
        {
	        type:"list",
	        name:"options",
	        message:"What would you like to do?",
	        choices:["bid", "post"]
        }
    ]).then(function(answers){
        if(answers.options === "bid"){
        	inquirer.prompt([
		        {
			        type:"list",
			        name:"options",
			        message:"What would you like to do?",
			        choices: connection.query("SELECT * FROM items", function(err, res) {
			        	for (var i=0; i<res.length; i++)
				        	{
				        		console.log(i);
				        	}
				        })
		        }
	    	]).then(function(answers){
	    		console.log("It worked!")
	        });
        // else if(answers.options === "post"){
            
        }
    });
}
promptUser();