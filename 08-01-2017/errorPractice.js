function assertThrows(func, x, y){
	var threw = false;
	try{
		func(x,y);
	} catch (e) {
		threw =true;
	}
	return threw;
	
}

function multiply(x, y){
	if (isNaN(x) || isNaN(y)){
		throw ("One of the argumments is not a number");
	}
	var result = x*y;
	console.log(result);
	return result;
}

assertThrows(multiply, "asdasdf", 2);