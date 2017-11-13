var should = require('chai').should()
var titleize = require("../titleize_js");

describe("Titleize", function(){
	it("should capitalize initial letter of each word in input", function(){
		titleize("marissa pels").should.equal("Marissa Pels");
	});

	it("should append period to leading titles", function(){
		titleize("Ms Pels").should.equal("Ms. Pels");
	});

	it("should not change properly cased strings", function(){
		titleize("Marissa Pels").should.equal("Marissa Pels");
	});

	it("should properly case mixed case strings", function(){
		titleize("MARissa pEls").should.equal("Marissa Pels");
	});
});