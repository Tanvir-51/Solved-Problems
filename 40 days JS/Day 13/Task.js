// 1
// At the global
console.log(this); // this refers to the global window object

// inside an object method

const obj1 = {
  greetings: function () {
    console.log(this); // this refers to the  obj1 object.
  },
};

obj1.greetings();

// inside the standalone non-arrow function

function nonArrow() {
  console.log(this); // this refers to the global window object
}

nonArrow();

// inside the standalone arrow function

const arrowFunc = () => {
  console.log(this); // this refers to the global window object
};

arrowFunc();

// inside an arrow function(as object method)

const person = {
  name: "Tanvir",
  newFunc: () => {
    console.log(this.name); // this refers to the global window object
  },
};

person.newFunc();

// inside an object created with constructor function

function Cartoon() {
  this.name = "Tanvir";
  console.log(this); // this refers to the new object
}

new Cartoon();
// console.log(this.name);

// 2

const user = {
  name: "tapaScript",
  greet: function () {
    return () => console.log(`Hello, ${this.name}!`);
  },
};

const inner = user.greet();

inner();

// 3

const obj = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFn = obj.greet;
greetFn.call(obj);

// 4

const user2 = {
  name: "Alex",
  greet: function () {
    const inner = () => {
      console.log(`Hello, ${this.name}!`);
    };
    inner();
  },
};

user2.greet();

// 5

function Sports(name, number_of_player) {
  this.name = name;
  this.number_of_player = number_of_player;

  this.logs = function () {
    console.log(`${this.name} and ${this.number_of_player}`);
  };
}

const player1 = new Sports("Tanvir", 5);
player1.logs();
// console.log(player1.name);

// 6

const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};
// car1.describe();

const car2 = {
  brand: "BMW",
  model: "X1",
};

car1.describe.call(car2);
car1.describe.apply(car2);
const describeCar2 = car1.describe.bind(car2);
describeCar2();

// 7

const person3 = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};

person3.sayHello();
person3.sayHelloArrow();
