var Nightmare = require('nightmare');		
var nightmare = Nightmare({ show: true });

nightmare
	.goto("https://google.com/")
	.type("#lst-ib", "Marissa Pels is really cool")
	.wait(2000)
	.click("[type=submit]")
	.screenshot("marissa.png")
	.end()
	.then(function() {
    	console.log("DONE!!");
 	});
