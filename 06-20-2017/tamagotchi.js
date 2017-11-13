function DigitalPal (){
	this.hungry=false;
	this.sleepy=false;
	this.bored=true;
	this.age=0;
	this.feed = function(){
		if (this.hungry){
			console.log("That was yummy!");
			this.hungry=false;
			this.sleepy=true;
		}
		else {
			console.log("No thanks! I'm full.")
		}
	};
	this.sleep=function(){
		if (this.sleepy){
			console.log("Zzzzzzzzzz");
			this.sleepy=false;
			this.bored=true;
			this.increaseAge();
		}
		else {
			console.log("No way! I'm not tired.")
		}
	};
	this.play=function(){
		if (this.bored){
			console.log("Yay! Let's play!");
			this.bored=false;
			this.hungry=true;
		}
		else {
			console.log("Not right now. Later?")
		}
	};
	this.increaseAge=function(){
		this.age++;
		console.log("Happy Birthday to me! I am " + this.age + " years old!")
	};
}

var dog = new DigitalPal();

dog.outside=false;
dog.bark=function(){
	console.log("Woof! Woof!");
}
dog.goOutside=function(){
	if (this.outside){
		console.log("We're already outside though...")
	}
	else {
		console.log("Yay! I love the outdoors!");
		this.outside=true;
		this.bark();
	}
}
dog.goInside=function(){
	if (this.outside){
		console.log("Do we have to? Fine...");
		this.outside=false;
	}
	else {
		console.log("I'm already inside...")
	}
}

var cat = new DigitalPal();

cat.houseCondition=100;
cat.meow=function(){
	console.log("Meow! Meow!");
}
cat.destroyFurniture=function(){
	if (this.houseCondition>10){
		this.houseCondition=this.houseCondition-10;
		console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
		this.bored=false;
		this.sleepy=true;
	}
}
cat.buyNewFurniture=function(){
	this.houseCondition=this.houseCondition+50;
	console.log("Are you sure about that?");
}

// dog.play();
// dog.play();
// dog.feed();
// dog.feed();
// dog.sleep();
// dog.sleep();
// dog.goOutside();
// dog.goOutside();
// dog.goInside();
// dog.goInside();

// console.log("\n");

// cat.play();
// cat.play();
// cat.feed();
// cat.feed();
// cat.sleep();
// cat.sleep();
// cat.meow();
// cat.destroyFurniture();
// cat.destroyFurniture();
// cat.buyNewFurniture();

lookup= {
	dog: dog,
	cat: cat
}

lookup[process.argv[2]][process.argv[3]]();

