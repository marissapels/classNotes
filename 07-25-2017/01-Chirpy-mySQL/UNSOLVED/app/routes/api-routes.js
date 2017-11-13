// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps

app.get("/api/chirps",function(res,req){
	connection.query("SELECT * FROM chirps", function(err, result){
		if (error) throw error;
	})
})
  // Add a chirp


};
