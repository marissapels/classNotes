// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
var inquirer = require("inquirer");

inquirer.prompt([
	{
		type:"input",
		message: "What is your name?",
		name: "name"
	},

	{
		type:"password",
		message:"Set your password",
		name: "password"
	},
	{
		type:"list",
		message: "Choose an ice cream flavor:",
		choices: ["Chocolate","Vanilla","Strawberry"],
		name:"flavor"
	},
	{
		type:"checkbox",
		message: "Select toppings:",
		choices: ["chocolate chips","sprinkles","cookie dough","hot fudge"],
		name:"toppings"
	},
	{
		type:"confirm",
		message: "Ready to eat???",
		name: "confirm",
		default: true
	}
]).then(function(user){
	console.log(JSON.stringify(user, null, 2));

	if (user.confirm){
		console.log("==============================================");
	    console.log("");
	    console.log("Welcome " + user.name);
	    console.log("Your " + user.flavor + " ice cream with "+ user.toppings +" is ready to eat!");
	    console.log("");
	    console.log("==============================================");
	}
})