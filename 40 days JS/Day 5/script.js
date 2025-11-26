let sum = 0;

// for(let x = 0; x <= 100; x += 2){
//   sum += x;
// }

for (let x = 1; x <= 100; x++){
  if(x % 2 === 0){
    sum += x;
  }
}

console.log(sum);

let language = "Javascript";

for(let i = 0; i < language.length; i++){
  // console.log(language.charAt(i));
}


for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    // console.log("Row", i, "Colum", j);
  }
}

for (let i = 1; i <= 5; i++){
  if(i === 3) break;
  // console.log(i);
}

for (let i = 1; i <= 5; i++){
  if(i === 3) continue;
  // console.log(i);
}


// handling multiple counters

for (let i = 1, j = 10; i <= 10 && j >= 1; i++, j--){
  // console.log('i:', i, 'j:', j);
}


//pyramid

for(let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
      row += '* ';
  }
  console.log(row);
}


// for(let i = 1; i <= 8; i++){
//   let row = '';
//   for(let j = 1; j <= i; j++) {
//     row += '* '; 
//   }
//   console.log(row);
// }

let counter = 1;
while(counter <= 5){
  // console.log(counter);
  counter++;
}


let num = 10;
do{
  console.log(num);
  num++;
} while(num <= 5)