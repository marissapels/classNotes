var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Map-121790",
  database: "topsongs_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

inquirer.prompt([
	{
		type:"list",
		name:"options",
		message:"Choose a query",
		choices:["Query by Artist","Query by Count > 1","Songs released between two years", "Query by Song"]
	}
])
.then(function(answer){
	if(answer.options==="Query by Artist"){
		connection.query("SELECT*FROM songs WHERE artist=?",["The Beatles"], function(error,results){
			if (error) throw error;
			console.log(results);
		});	
	}
	if(answer.options==="Query by Count > 1"){
		connection.query("SELECT artist, COUNT(*) FROM songs GROUP BY artist HAVING COUNT(*)>1", function(error,results){
			if (error) throw error;
			console.log(results);
		});
	}
	if(answer.options==="Songs released between two years"){
		connection.query("SELECT*FROM songs WHERE year_released BETWEEN ? and ?",
			[
				"1990",
				"2000"
			]
			,function(error,results){
			if (error) throw error;
			console.log(results);
		});
	}
	if(answer.options==="Query by Song"){
		connection.query("SELECT*FROM songs WHERE song=?",["She Loves You"],function(error,results){
			if (error) throw error;
			console.log(results);
		});
	}
});
