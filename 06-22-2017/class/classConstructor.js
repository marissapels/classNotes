// requiring our Dud constructor function we exported from dud.js
var Student = require("./studentConstructor.js");
var students=[];

// constructor function for creating partyBus objects
var Class = function(number, professor, roomNum) {
  // this.duds will hold all of our dud objects
  this.number = students.length;
  this.professor = professor;
  this.roomNum = roomNum;
  // a method that creates a dud object from the constructor function we required
  // on line 1 and then pushes the new dud object to the this.duds array
  this.addStudent = function(name, subject, gpa) {
    this.students.push(new Student(name, subject, gpa));
  };
};

// exporting the PartyBus constructor which we will use in main.js
module.exports = PartyBus;
