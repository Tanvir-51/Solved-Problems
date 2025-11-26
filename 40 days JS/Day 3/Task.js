// 1

let num = 5;

let checkOddEven = (num % 2 === 0);

console.log(num);

console.log(checkOddEven);


// 2

let age = 28;
console.log(age >= 18 ? "Eligible" : "Not Eligible")

// 3

let monthlySalary = 12300;
let yearlySalary = 12300 * 12;
console.log(yearlySalary);

let totalSalary  = (20/100) * yearlySalary + yearlySalary;
console.log(totalSalary);


// 4

let color = 'Green';

console.log(color === 'Red' ^ 'Green' ? "Stop" : "Go");

// 5

let units = 5;
let monthlyBills = 5 * 150 * 30;
console.log(monthlyBills);

let annualBills = (20/100) * (monthlyBills * 12) + (monthlyBills * 12);
console.log(annualBills);


// 6

let year = 2025;

console.log((year % 4 === 0) && (year % 100) !== 0 ? "Leap Year" : "Not Leap Year");

// 7

let p = 5;
let q = 4;
let r = 6;

let max = p; 

// console.log((q > max) ? max = q : max = p);
// console.log((r > max) ? max = r : max);

if(q > max) max = q;
if(r > max) max = r;

console.log(`Max: ${max}`);

// 8

let count = 5;

let doubled = 5 << 1;
console.log(doubled);
