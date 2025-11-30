"use strict";

const employee = {
  id: "a5579",
  firstName: "Tanvir",
  lastName: "Ahmed",

  returnThis: function () {
    return this;
  },

  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log("Employee ID: ", employee.id);
console.log("this inside the employee object", employee.returnThis());
console.log("The full name: ", employee.getFullName());

const tom = {
  name: "Tom",
  age: 7,
};

const jerry = {
  name: "jerry",
  age: 3,
};

function greetMe(obj) {
  obj.logMessage = function () {
    console.log(`${this.name} is ${this.age} years old`);
  };

  console.log(obj);
}

// console.log(greetMe(tom));
// console.log(tom);

greetMe(tom);
tom.logMessage();

greetMe(jerry);
jerry.logMessage();

function sayName() {
  console.log("This inside a function", this);
}

sayName();

function outer(a) {
  console.log("this inside an outer function", this);

  return function inner(b) {
    console.log("this inside an inner function", this);
  };
}

const outerResult = outer(5);
outerResult(3);
