// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================
var nodeArgs = process.argv;
var newArray=nodeArgs.slice(2);

newArray.sort();

// for (var i=0; i<newArray.length; i++){
// 	console.log(newArray[i]);
// }

console.log(newArray);

//the answer in one line of code
// console.log(process.argv.slice(2).map(n=>parseFloat(n)).sort((a,b)=>a-b));