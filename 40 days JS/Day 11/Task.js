// 1

function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
// counter();
// counter();

// 2

function testClosure() {
  let x = 10;
  return function () {
    return x * x;
  };
}
// console.log(testClosure()());

// 3

function clickButton() {
  let clicked = 0;

  document.getElementById("my-button").addEventListener("click", function () {
    clicked++;
    console.log(`You have clicked ${clicked} times`);
  });
}

clickButton();

// 4

function createMultiplier(multiplier) {
  let x = multiplier;

  return function () {
    return x * x;
  };
}

let arg = createMultiplier(5);
console.log(arg());

// 6

function countCounter(initialCounter) {
  let count = initialCounter;

  return {
    increase: (clicked) => {
      count += clicked;
      console.log(`Count has increased to: ${count}`);
    },
    decrease: (unclicked) => {
      count -= unclicked;
      console.log(`Count has decreased to: ${count}`);
    },
    reset: () => {
      count = initialCounter;
      console.log(`The count has been Reset: ${count}`);
    },
  };
}

let countingClicked = countCounter(0);
countingClicked.increase(25);
countingClicked.decrease(10);
countingClicked.reset();
