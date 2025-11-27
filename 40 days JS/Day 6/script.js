function printThis() {
  console.log("Printing...");
}

printThis();

//function as expression

let printMe = function() {
  console.log("Print me");
}

// console.log(printMe());
printMe();

// parameter & arguments

function sum(a,b) {
  const result = a + b;
  return result;
}

let result = sum(5, 10);

console.log(result);

function double(x) {
  return x * 2;
}

console.log(double(result));


// Inner function

function outer() {
  console.log('Outer');

  return function inner() {
    console.log('Inner');
  }
}

let func = outer()
func() 
// console.log(func);


// callback funnction

let callBar = true;

function foo(func) {
  console.log('foo');

  if(callBar) {
    func();
  }
}

foo(function(){
  console.log('bar');
})


// Higher order function

function getCamera(camera) {
  camera();
}

getCamera(function() {
  console.log("Sony");
})



function getHello() {
  return function(){
    console.log('Hello');
  }
}

let retFun = getHello();

retFun()


// Arrow function


let greetings = () => console.log("Hello");


// IIFE

(function(count) {
  console.log("IIFE", count);
})(1)