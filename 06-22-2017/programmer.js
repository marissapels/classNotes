function Programmer(name, position, age, language){
	this.name = name;
	this.title=position;
	this.age=age;
	this.favorite=language;

	//this function would duplicate the function
	// this.print=function(){
	// 	console.log("Name: "+this.name+"\nPosition: "+this.title+"\nAge:"+this.age+"\nFavorite Language: "+this.favorite);
	// }

}

var bob = new Programmer("Silent Bob", "Supreme Codemaster",33,"Javascript");

//this creates the printInfo method and pplies it to all programmer objects
Programmer.prototype.printInfo=function(){
	console.log("Name: "+this.name+"\nPosition: "+this.title+"\nAge:"+this.age+"\nFavorite Language: "+this.favorite);
}

//This command is for the parent. It will only change to sleeping if the bob's position is not specified.
// Programmer.prototype.position="sleeping";
bob.printInfo();