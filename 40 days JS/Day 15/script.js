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

// join()

const eemotions = ["😀", "😍", "😮", "🤐"];
console.log(eemotions);

const newEmotion = eemotions.join("<=>");
console.log(newEmotion);

[].join(); // return ""

// fill()

const colors = ["red", "blue", "green"];

colors.fill("pink", 1, 3); // here, 1 is index number but 3 is length number
console.log(colors);

// includes()

const names = ["tom", "bob", "alex", "tom"];

console.log(names.includes("tom"));
console.log(names.includes("julyy"));

//indexOf()

console.log(names.indexOf("alex"));
console.log(names.indexOf("rob"));

// lastIndexOf()

console.log(names.indexOf("tom"));
console.log(names.lastIndexOf("tom"));

// reverse()

const nnames = ["bob", "tom", "alex"];
console.log(nnames.reverse());

// sort()
// the default sort() method converts the element type into strings
// the default sorting order is ascending

console.log("After default sorting:", nnames.sort());

nnames.sort(function (a, b) {
  return a === b ? 0 : a > b ? -1 : 1;
});

console.log("After using descending sort:", nnames);

const ages = [2, 1000, 34, 23, 45, 10];

console.log(ages.sort());

console.log(
  ages.sort(function (a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
  })
);
