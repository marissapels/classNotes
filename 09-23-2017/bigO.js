x=[1,2,2,3,4,5,6,7,8,9,9,2,1,4,6,8]


// Finding Duplicates
//Time =n^2
function duplicates(){
	for(var i=0;i<x.length; i++){
		for(var j=0;j<x.length; j++){
			if(x[i]===x[j]){
				console.log('Duplicate Found');
			}
		}
	}
}

//this would make the time closer to n. removes a for loop.
//You have an object and you have a key. The time to look up a key is constant
function duplicates(){
	var hash = {

	}
	for(var i=0;i<x.length; i++){
		if(hash[x[i]]){
			console.log('Duplicate Found')
		} else{
			hash[x[i]]=true;
		}
	}

}
