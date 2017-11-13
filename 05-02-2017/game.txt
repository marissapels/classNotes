//document ready function that assigns initial variables
$(document).ready(function(){
	var wins=0;
	var losses=0;
	var userScore=0;

	//chooses a random number that the user must try to add up to
	var randomNumber=Math.floor(Math.random()*(120-19+1))+19;

	//updates HTML with assigned variables
	$("#wins").html(wins);
	$("#losses").html(losses);
	$("#userScore").html(userScore);
	$("#randomNumber").html(randomNumber);

	//assigns a random value betwen 1 and 12 for each button variable
	var button1= Math.floor(Math.random()*12)+1;
	var button2= Math.floor(Math.random()*12)+1;
	var button3= Math.floor(Math.random()*12)+1;
	var button4= Math.floor(Math.random()*12)+1;

	//assigns a random value betwen 1 and 12 for each button variable
	$("#button1").attr("value", button1);
	$("#button2").attr("value", button2);
	$("#button3").attr("value", button3);
	$("#button4").attr("value", button4);


	function restartGame(){
		userScore=0;
		$("#userScore").html(userScore);
		randomNumber=Math.floor(Math.random()*(120-19+1))+19;
		$("#randomNumber").html(randomNumber);
		
		//assigns a random value betwen 1 and 12 for each button variable
		button1= Math.floor(Math.random()*12)+1;
		button2= Math.floor(Math.random()*12)+1;
		button3= Math.floor(Math.random()*12)+1;
		button4= Math.floor(Math.random()*12)+1;

		//assigns a random value betwen 1 and 12 for each button variable
		$("#button1").attr("value", button1);
		$("#button2").attr("value", button2);
		$("#button3").attr("value", button3);
		$("#button4").attr("value", button4);
	}

	$(".button").on("click", function(){

		//assigns variable to value of clicked button
		var clickedButton= $(this).attr("value");
		clickedButton=parseInt(clickedButton);

		//adds clicked button value to user score
		userScore += clickedButton;

		//displays user score on HTML
		$("#userScore").html(userScore);

		//if user score matches the random number, the game is won and restarts
		if (userScore===randomNumber){
			wins++;
			$("#wins").html(wins);
			restartGame();
			return;
		}

		//if user score is greater than the random number, the game is lost and restarts
		if (userScore>randomNumber){
			losses++;
			$("#losses").html(losses);
			restartGame();
			return;
		}	
	})

})