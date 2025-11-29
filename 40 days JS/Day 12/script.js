function Car(name, model) {
  this.name = name;
  this.model = model;
}

let bmw = new Car("BMW", "X1");
console.log(bmw);

// ------------------------------------

function user(name, age) {
  return {
    name,
    age,
  };
}

let user1 = user("Tanvir", 28);
console.log(user1);

// ----------------------------------
let profile = {
  name: "Tanvir",
  company: "TigerIT",
  message: function () {
    console.log(`${this.name} works at ${this.company}`);
  },
  address: {
    city: "Sylhet",
    postal: 3001,
    country: "Bangladesh",
  },
};

console.log(profile.name);
profile.message();

console.log("salary" in profile);

console.log("-------------------");
for (let key in profile) {
  console.log(key);
  console.log(profile[key]);
}

console.log(Object.keys(profile));
