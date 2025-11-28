// class Person{
//   constructor(name, year_born){
//     this.name = name;
//     this.year_born = year_born;
//   }

//   what(){
//     console.log(this.name + " is a person.");
//   }

//   static arms(){
//     return 2;
//   }
// }

// var me = new Person("Tanvir", 1998);
// // console.log(me.name + " was born in " + me.year_born + "!") ;
// // console.log(`${me.name} was born in ${me.year_born}`);

// // me.what();

// // console.log(`${me.name} has ${Person.arms()} arms`);

// class Juggler extends Person{
//   what(){
//     console.log(`${this.name} is a juggler.`);
//   }
// }

// var you = new Juggler("Masud", 1997);

// me.what();
// you.what();

// //----------------------------------------------------------------------

// class Thermostat{
//   constructor(fahrenheit){
//     this._fahrenheit = fahrenheit;
//   }

//   get temperature(){
//     return (this._fahrenheit - 32) * 5/9;
//   }

//   set temperature(celsius){
//      this._fahrenheit = (9/5 * celsius) + 32;
//   }

//   get fahrenheit(){
//     return this._fahrenheit;
//   }
// }

// let thermos = new Thermostat(76);
// console.log(thermos.temperature);

// thermos.temperature = 26;
// console.log(thermos.temperature);

// console.log(thermos.fahrenheit);

//---------------------------------------------------//

let amount = 6789;
let rev = 0;

while (amount > 0) {
  let digit = amount % 10;
  rev = rev * 10 + digit;
  amount = Math.floor(amount / 10);
}

console.log(rev);

//------------------------------------------------------

for (let i = 1; i <= 5; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}
