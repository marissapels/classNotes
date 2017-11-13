var Nightmare = require('nightmare');		
var nightmare = Nightmare({ show: true });
var should = require("chai").should();


describe("Google Image",function(){
	it("should take me to google images",function(done){
		nightmare
			.goto("https://google.com/")
			.wait("[data-pid=2]")
			.click("[data-pid=2]")
			// .evaluate(function() {
   //     			 return document.title;
   //   		})
			// .then(function(title){
			// 	title.should.equal("Google Images");
				done();
			// })
			// .type("#lst-ib", "Marissa Pels")
			// .wait(2000)
			// .click("[type=submit]")
			// .screenshot("marissa.png")
			// .end()
			// .then(function() {
		 //    	console.log("DONE!!");
		 // 	});	
	})

})

