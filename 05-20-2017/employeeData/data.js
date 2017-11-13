 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCsc_QpBWto_Dv5SIiIVoSi2ANVqwVa4Cw",
    authDomain: "employeedatamanagement-7ab8f.firebaseapp.com",
    databaseURL: "https://employeedatamanagement-7ab8f.firebaseio.com",
    projectId: "employeedatamanagement-7ab8f",
    storageBucket: "employeedatamanagement-7ab8f.appspot.com",
    messagingSenderId: "162569303269"
  };
  firebase.initializeApp(config);

  var database=firebase.database();

  var name="";
  var role="";
  var date="";
  var rate="";
  var monthsWorked="";
  var bill="";

  $("#submit").on("click", function(){
  	event.preventDefault();

  	name=$("#name-input").val().trim();
  	role=$("#role-input").val().trim();
  	date=$("#date-input").val().trim();
  	rate=$("#rate-input").val().trim();
  	monthsWorked= moment().diff(moment(date, "MM/DD/YY"), "months");
    bill= parseInt(monthsWorked)*parseInt(rate);

  	console.log(date);
  	console.log(monthsWorked);

  	database.ref().push({
  		name: name,
  		role: role,
  		date: date,
  		monthsWorked: monthsWorked,
  		rate: rate,
  		bill: bill
  	});

  	$("#name-input").val("");
  	$("#role-input").val("");
  	$("#date-input").val("");
  	$("#rate-input").val("");

  });

database.ref().on("child_added", function(snapshot){
	var newEmployee=
		"<tr>" +
			"<td>" + (snapshot.val().name) + "</td>" +
			"<td>" + (snapshot.val().role) + "</td>" +
			"<td>" + (snapshot.val().date) + "</td>" +
			"<td>" + (snapshot.val().monthsWorked) + "</td>" +
			"<td>" + (snapshot.val().rate) + "</td>" +
			"<td>" + (snapshot.val().bill) + "</td>" +
		"</tr>";





	// var newRow=$("<tr>");
	// var newName=$("<td>");
	// newName.html(snapshot.val().name);
	// var newRole=$("<td>");
	// newRole.html(snapshot.val().role);
	// var newDate=$("<td>");
	// newDate.html(snapshot.val().date);
	// var newRate=$("<td>");
	// newRate.html(snapshot.val().rate);
	// newRow.append(newName);
	// newRow.append(newRole);
	// newRow.append(newDate);
	// newRow.append(newRate);

	$(".table").append(newEmployee);




  }, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added",function(snapshot){

// })