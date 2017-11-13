// *********************************************************************************
// TO DO:
// 1. Display all chirps on page load
// 2. Add new chirp to database and prepend to existing chirps
// *********************************************************************************

// When the page loads, grab and display all of our chirps


// When user chirps
$("#submit").on("click", function(event){
	event.preventDefault();
	var newChirp = {
		name: $("#name").val().trim();
		chirp: $("#chirp")

	}
})