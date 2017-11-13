var Student = function(name, subject, gpa) {
  this.name = name;
  this.subject = subject;
  this.gpa = gpa;
  };
};

// exporting our Dud constructor.We will require it in partyBus.js
module.exports = Student;
