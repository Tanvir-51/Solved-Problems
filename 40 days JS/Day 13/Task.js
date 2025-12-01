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
