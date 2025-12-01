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

const getFood = () => this;

console.log("This is inside an arrow function", getFood());

const food = {
  name: "mango",
  color: "yellow",

  // getDesc: () => `${this.name} is ${this.color} color`,

  //   getDesc: function () {
  //     return `${this.name} is ${this.color} color`;
  //   },

  getDesc: function () {
    return () => `${this.name} is ${this.color} color`;
  },
};

let foodDesc = food.getDesc();

console.log(foodDesc());

// call method

function greeting() {
  console.log(`Hello ${this.name} belongs to the ${this.address}`);
}

const user = {
  name: "Tapascript",
  address: "All of you",
};

greeting.call(user);

const likes = function (hobby1, hobby2) {
  console.log(`${this.name} likes ${hobby1} and ${hobby2}`);
};

const person = {
  name: "tanvir",
};

likes.call(person, "eating", "reading");

// apply method

const likesToApply = ["sleeping", "eating"];

likes.apply(person, likesToApply);

// bind method

const newHobbies = function (hobby1, hobby2) {
  console.log(`${this.name} likes ${hobby1} and ${hobby2}`);
};

const officer = {
  name: "Bob",
};

const newFn = newHobbies.bind(officer, "solving crimes", "smoking cigars");
newFn();

// this & new

const Cartoon = function (name, animal) {
  this.name = name;
  this.animal = animal;

  this.log = function () {
    console.log(`${this.name} is a ${this.animal}`);
  };
};

const tomCartoon = new Cartoon("Tom", "Cat");
tomCartoon.log();

const jerryCartoon = new Cartoon("Jerry", "Mouse");
jerryCartoon.log();
