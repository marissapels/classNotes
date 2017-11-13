// dependency for inquirer npm package
var inquirer = require("inquirer");

// constructor function used to create programmers objects
function Programmer(name, position, age, language) {
  this.name = name;
  this.position = position;
  this.age = age;
  this.language = language;
}

// creates the printInfo method and applies it to all programmer objects
Programmer.prototype.printInfo = function () {
  console.log("Name: " + this.name + "\nPosition: " + this.position + "\nAge: " +
    this.age + "\nLanguages: " + this.language);
};

var newGuys = []

// runs inquirer and asks the user a series of questions whose replies are
// stored within the variable answers inside of the .then statement.
inquirer.prompt([
  {
    name: "spanish",
    message: "English or Spanish?",
    type: 'confirm'
  }
]).then(function (answers) {
  if (answers.spanish) {
    inquirer.prompt([
      {
        name: "spanish",
        message: "This is spanish",
        type: 'confirm'
      }
    ]).then(function (answers) {
    });
  } else {
    inquirer.prompt([
      {
        name: "spanish",
        message: "This is english?",
        type: 'confirm'
      }
    ]).then(function (answers) {
    });
  }

});
