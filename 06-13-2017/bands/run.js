var music=require("./bands.js").genres;

// console.log(music.genres.punk);

// for (var key in obj){
// 	console.log(obj[key])
// }

for (var key in music){
	console.log("A "+key+" band is "+music[key]);
}