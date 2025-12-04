function Car(model) {
  this.model = model;
}

let newCar = new Car("BMW X1");
console.log(newCar.model);

const salad = [
  "Tomato",
  "mashroom",
  "broccoly",
  "cabage",
  "corn",
  "carrot",
  "avocado",
];

const anotherSalad = new Array(
  "Tomato",
  "mashroom",
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
