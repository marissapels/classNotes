var fs=require("fs");
var x= +process.argv[3];
var total=0;


var options ={
	total: function(data){
		fs.readFile("bank.txt","utf8", function(error,data){
			if (error) {
    			return console.log(error);
    		}
    		var bankArray=data.split(",");

    		for (var i=0;i<bankArray.length;i++){
    			total=total+ +bankArray[i];
    		}
    		console.log(total);
		});
	},

	deposit: function(){
		fs.appendFile("bank.txt", x+", " , function(err){
			if (err) {
				console.log(err);
			}
			else {
				console.log("Deposited: " + x)
			}
		});
	},

	withdraw: function(){
		fs.appendFile("bank.txt", -x+", ", function(err){
			if (err) {
				console.log(err);
			}
			else {
				console.log("Withdrew: " + x)
			}
		});
	}

	// lotto: function(){

	// }
 }

options[process.argv[2]]();

