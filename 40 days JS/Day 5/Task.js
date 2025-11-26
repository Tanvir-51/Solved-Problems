// 1

for (let i = 1; i <= 5; i++) {
  let row = '';

  for (let j = 1; j <= i; j++) {
    row += '* ';
  }
  console.log(row);
}


// 2

let N = 5;

for (let i = 1; i <= 10; i++) {
  console.log(N, "x", i, "=", N * i);
}

// 3


let sum = 0;

for (let i = 1; i <= 500; i++){
  if(i % 2 === 1){
    sum += i;
  }
}

console.log(sum);


// 4

for (let i = 1; i <= 20; i++){
  if(i % 3 === 0) continue;
  console.log(i);
}


// 5

let input = 6789;
let output = 0;

while( input > 0){
  let digit = input % 10;
  output = output * 10 + digit  ;
  input = Math.floor(input / 10);
}

console.log(output);