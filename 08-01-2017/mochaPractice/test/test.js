var should = require('chai').should();
var disemvowel = require("../disemvowel_js");

describe("disemvowel", function(){
	it("should not contain any vowels in lowercase", function(){
		disemvowel("this is lowcase").should.equal("ths s lwcs");
	});

	it("should not contain any vowels in uppercase", function(){
		disemvowel("THIS IS UPCASE").should.equal("THS S PCS");
	});

	it("should not contain any vowels in mixed", function(){
		disemvowel("this IS mixed").should.equal("ths S mxd");
	});
});

