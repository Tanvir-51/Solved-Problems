// 1
//
const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");

// 2

const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);

//3

const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107",
    },
  },
};

const {
  name,
  company,
  company: { name: companyName },
  company: {
    location: { city },
  },
} = person;
console.log(name);
// console.log(company);
console.log(companyName);
console.log(city);

// 6

// Object.keys() method return the keys of an object. It gives you an array of the property names of the object.

const person3 = { name: "Alice", age: 25 };

console.log(Object.keys(person3));

// Object.entries() method return both the keys and values of an object. It gives you an array of the property names and their values of an object

console.log(Object.entries(person3));

for (let [key, value] of Object.entries(person3)) {
  console.log(key, value);
}

// 7

// using .hasOwnProperty()

const person2 = { name: "John" };

console.log(person2.hasOwnProperty("name")); // true
console.log(person2.hasOwnProperty("age")); // false

// 8

const person1 = { name: "John" };
const newPerson = person1;
newPerson.name = "Doe";
console.log(person1.name);

// 9

// the best way to deeply copy a nested object is using "structuredClone()" method. because it will copy the the value of the nested object, not the reference address. which happens when we try to copy an object with .assign() method, it copies the reference address of the nested object and change the value of the original object if there is a change made in the new object.

// 10

const users = [
  {
    name: "Alex",
    address: "15th Park Avenue",
    age: 43,
  },
  {
    name: "Bob",
    address: "Canada",
    age: 53,
  },
  {
    name: "Carl",
    address: "Bangalore",
    age: 26,
  },
];

for (let { name, address, age } of users) {
  console.log(name, address, age);
}
