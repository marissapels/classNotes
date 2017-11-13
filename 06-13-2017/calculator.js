
// console.log(process.argv[2]===process.argv[3])
var x=process.argv[3];
var y=process.argv[4];

var map= {
	add: +x + +y,
	subtract: +x - +y,
	multiply: +x * +y,
	divide: +x / +y,
	remainder: +x % +y,
	exp: Math.pow(+x, +y),
}

console.log(map[process.argv[2]]);