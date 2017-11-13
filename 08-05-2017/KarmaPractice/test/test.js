var should =require("chai").should();
var multiply= require("../multiply_js");

describe("Test Multiply",function(){
	it("should work",function(){
		multiply(2,6).should.equal(12);
	});

	it("should throw when either argument is not a number", function(){
		(function(){
			multiply(4,"3");
		}).should.throw(Error);
	})
});