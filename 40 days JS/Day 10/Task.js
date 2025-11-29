// 1

let user = "Alice";

function outer() {
  function inner() {
    console.log(user);
  }
  let user = "Bob";
  inner();
}

// outer();

// The output will be: Bob

// 2

function add(total, num) {
  return (total += num);
}

let total = 0; // Global, bad practice

total = add(total, 5);
console.log(total);
total = add(total, 10);
console.log(total);

// 3

function outer() {
  let outerVar = "This is outer variable";

  function inner() {
    console.log(outerVar);
  }
  inner();
}

outer();

// 4

function outers() {
  for (var i = 0; i < 5; i++) {
    // console.log(i);
  }
  console.log(i);
}

outers();

// 5

function outer3() {
  function inner() {
    var innerVar = "Inner Var";
  }
  console.log(innerVar);
}

// outer3()

// 6

// console.log(a);
let a = 10;

// 7

function showAge() {
  let age = 25;
  console.log(age);
}

// console.log(age);

// 8

let message = "Hello";

function outer4() {
  let message = "Hi";

  function inner() {
    console.log(message);
  }

  inner();
}

outer4();

// 9

let x = "Global";

function outer5() {
  let x = "Outer";

  function inner() {
    let x = "Inner";
    console.log(x);
  }

  inner();
}

outer5();

// 10

function counter() {
  let count = 0;
  return function () {
    count--;
    console.log(count);
  };
}

const reduce = counter();
reduce();
reduce();
