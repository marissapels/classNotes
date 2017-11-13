var inquirer = require("inquirer");
var count=0;
var starters=[];
var subs=[];
var team=[];
var offenseTotal=0;
var defenseTotal=0;
var teamScore=0;

function Player(name,position,offense,defense){
	this.name=name;
	this.position=position;
	this.offense=offense;
	this.defense=defense;
	this.goodGame=function(){
		var random=Math.round(Math.random());
		if (random===1){
			this.offense++;
		}
	};
	this.badGame=function(){
		var random=Math.round(Math.random());
		if (random===1){
			this.defense++;
		}
	};
	this.printInfo = function() {
  		console.log("Name: " + this.name + "\nPosition: " + this.position +
  "\nOffense: " + this.offense + "\nDefense: " + this.defense+"\n");
};
}



var askQuestion = function() {

  // if statement to ensure that our questions are only asked five times
  if (count < 8) {
    // runs inquirer and asks the user a series of questions whose replies are
    // stored within the variable answers inside of the .then statement
    inquirer.prompt([
      {
        name: "name",
        message: "What is your name?"
      }, {
        name: "position",
        message: "What is your current position?"
      }, {
        name: "offense",
        message: "On a scale of 1-10, how good are you at offense?"
      }, {
        name: "defense",
        message: "On a scale of 1-10, how good are you at offense?"
      }
    ]).then(function(answers) {
      // initializes the variable newguy to be a programmer object which will take
      // in all of the user's answers to the questions above
      var newGuy = new Player(
        answers.name,
        answers.position,
        answers.offense,
        answers.defense);
      // printInfo method is run to show that the newguy object was successfully created and filled
      newGuy.printInfo();
      // add one to count to increment our recursive loop by one
      team.push(newGuy)
      if (count<5){
      	starters.push(newGuy);
      }
      else {
      	subs.push(newGuy);
      }
      count++;
      // run the askquestion function again so as to either end the loop or ask the questions again
      askQuestion();
    });
    // else statement which prints "all questions asked" to the console
    // when the code has been run five times
  }
  else {
    console.log("All questions asked");

    for (var i=0;i<team.length;i++){
    	team[i].printInfo();
    }
    
    for (var i=0;i<starters.length;i++){
    	offenseTotal=parseInt(offenseTotal)+parseInt(starters[i].offense);
    	defenseTotal=parseInt(defenseTotal)+parseInt(starters[i].defense);
    }
    console.log("offense total: "+offenseTotal);
    console.log("defense total: "+defenseTotal);
    playGame();
    if (teamScore>0){
    	for (var i=0;i<starters.length;i++){
    		starters[i].goodGame();
    		console.log(i + " newOffense: "+starters[i].offense);
    	}
    	console.log("Team Score: "+teamScore+" -->You won!");

    }
    if (teamScore<0){
    	for (var i=0;i<starters.length;i++){
    		starters[i].badGame();
    		console.log(i + " newDefense: "+starters[i].defense);
    	}
    	console.log("Team Score: "+teamScore+" -->You lost!");
    }
	inquirer.prompt([
	{
		type: "confirm",
		name:"restart",
		message:"Play again?"
	}
	]).then(function(newgame){
		if (newgame.restart){
			askQuestion();
		}
	});
  }
};

// call askquestion to run our code
askQuestion();

function playGame(){
	teamScore=0;
	offenseTotal=0;
	defenseTotal=0;
	for (var i=0;i<10;i++){
		var random1=Math.floor(Math.random()*49)+1;
		var random2=Math.floor(Math.random()*49)+1;
		// console.log(i+" random1: "+random1);
		// console.log(i+" random2: "+random2);

		if(random1<offenseTotal){
			teamScore++;
		}
		if(random2>defenseTotal){
			teamScore--;
		}
	}
}