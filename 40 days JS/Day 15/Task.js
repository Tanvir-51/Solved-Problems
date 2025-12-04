// T-001

const fiveElements = new Array("c", "c++", "javascript", "python", "database");
console.log(fiveElements);

// T-002

const emptySlots = new Array(3);
console.log(emptySlots);

// T-003

const salad = [
  "Tomato",
  "mushroom",
  "broccoly",
  "cabage",
  "corn",
  "carrot",
  "avocado",
];

console.log(salad[salad.length - 4]);

// T-004

for (let i = 1; i <= salad.length - 1; i = i + 2) {
  console.log(`The Odd index: ${i}: ${salad[i]}`);
}

// T-005
salad.push("cucumber");
salad.unshift("coliflower");

console.log(salad);

// T-006

salad.pop();
salad.shift();

console.log(salad);

// T-007

const favFood = [
  "coconut",
  "beef",
  "chicken",
  "mutton",
  "kala vuna",
  "ice-cream",
  "mango drinks",
  "chips",
  "noodles",
  "soup",
];

const [, , , , , savoy] = favFood;

console.log(savoy);

// T-008

const [fruit, meat, ...rest] = favFood;

console.log(rest);

// T-009

// const favFoodCopy = favFood;
// const favFoodCopy = favFood.slice();
const favFoodCopy = [...favFood];

console.log(favFoodCopy);
