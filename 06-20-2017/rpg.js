function Character(name, profession, gender, age, strength, hitPoints) {
	this.name= name,
	this.profession= profession,
	this.gender= gender,
	this.age= age,
	this.strength= strength,
	this.hitPoints= hitPoints,
	this.IsAlive= function(){
		if (this.hitPoints>0){
			console.log(this.name + " is alive \n");
		}
		else {
			console.log(this.name + " is dead :( \n");
		}
	},
	this.attack= function(char2){
		console.log(this.name + " attacks " + char2.name);
		char2.hitPoints= char2.hitPoints-this.strength;
	}
	this.LevelUp= function(){
		this.age=age+1;
		this.strengh=strength+5;
		this.hitPoints=hitPoints+25;
	}
	this.printStats= function(){
		console.log("name: "+this.name);
		console.log("profession: "+this.profession);
		console.log("gender: "+this.gender);
		console.log("age: "+this.age);
		console.log("strength: "+this.strength);
		console.log("hitPoints: "+this.hitPoints +"\n");
	}
}

var dog = new Character("Dog","Guard","Female",4,8,50);
var cat = new Character("Cat","Brainiac","Male",8,9,50);
var mouse = new Character("Mouse","Speed Racer","Male",1,6,50);

dog.printStats();
cat.printStats();
mouse.printStats();

dog.attack(cat);
cat.printStats();
cat.IsAlive();
dog.LevelUp();
dog.printStats();

dog.attack(cat);
dog.attack(cat);
cat.IsAlive();
cat.printStats();

dog.attack(cat);
cat.IsAlive();
cat.printStats();

dog.attack(cat);
cat.IsAlive();
cat.printStats();

dog.attack(cat);
cat.IsAlive();
cat.printStats();

dog.attack(cat);
cat.IsAlive();
cat.printStats();

//In order to add a property:
// dog.gym="Gold's";