function Car(model) {
  this.model = model;
}

let newCar = new Car("BMW X1");
console.log(newCar.model);

const salad = [
  "Tomato",
  "mushroom",
  "broccoly",
  "cabage",
  "corn",
  "carrot",
  "avocado",
];

const anotherSalad = new Array(
  "Tomato",
  "mushroom",
  "broccoly",
  "cabage",
  "corn",
  "carrot",
  "avocado"
);

console.log("Salad: ", salad);
console.log("Constructor Salad: ", anotherSalad);

for (let i = 0; i <= salad.length - 1; i++) {
  console.log(`Element at index ${i} is ${salad[i]}`);
}

const saladCopy = salad.slice();
console.log("saladCopy: ", saladCopy);

// destructuring

const [tmt, mshrm, crt] = ["tomato", "mushroom", "carrot"];

console.log(tmt, mshrm, crt);

// rest parameter

const [tomato, mushroom, ...rest] = [
  "Tomato",
  "mashroom",
  "broccoly",
  "cabage",
  "corn",
  "carrot",
  "avocado",
];

// console.log(tomato, mushroom);
console.log(rest);

// swapping

let first = "😟";
let second = "😊";

[first, second] = [second, first];

console.log(first, second);

// merge
const emotions = ["😊", "🙁"];
const veggies = ["cabage", "broccoly", "carrot"];

const emotionalVeggies = [...emotions, ...veggies];

console.log(emotionalVeggies);
console.log(...emotionalVeggies);

// length

const arr1 = [11, 21, 45];
const arr2 = new Array(8);

console.log(arr1.length);
console.log(arr2.length);

arr1.length = 0;
console.log(arr1);

// concat()

const first1 = [1, 2, 3];
const second2 = [4, 5, 6];
const third = [7, 8, 9];

const merge = first1.concat(second2, third);
console.log(merge);
