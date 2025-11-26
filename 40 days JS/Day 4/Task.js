// 2

let amount = 500;

console.log((amount % 100 === 0) ?("Withdrawal successful" ): ("Invalid amount"))


// 3

let operator = '+';

switch(operator){
  case '+':
    console.log(10 + 5);
    break;
  case '-':
    console.log(10 - 5);
    break;
  case '*':
    console.log(10 * 5);
    break;
  case '/':
    console.log(10 / 5);
    break;
  case '%':
    console.log(10 % 5);
    break;
  default:
    console.log("Invalid Operator");
}



// 4


let age = 15;

if(age < 18){
  console.log("$3");
} else if (age >= 18 && age <= 60){
  console.log("$10");
} else if (age > 60){
  console.log("$8");
}


// 5


let birthMonth = 'june';

switch(birthMonth){
  case 'march':
    console.log("Aries");
    break;
  case 'april':
    console.log(' Taurus ');
    break;
  case 'may':
    console.log('Gemini');
    break;
  case 'june':
    console.log('Cancer');
    break;
  case 'july':
    console.log('Leo');
    break;
  case 'august':
    console.log('Virgo');
    break;
  case 'september':
    console.log('Libra');
    break;
  case 'october':
    console.log('Scorpius');
    break;
  case 'november':
    console.log('Sagittarius');
    break;
  case 'december':
    console.log('Capricornus');
    break;
  case 'january':
    console.log('Aquarius');
    break;
  case 'february':
    console.log('Pisces');
    break;
  default:
    console.log("Invalid Month");
}


// 6

let a = 5;
let b = 15;
let c = 15;

if(a === b && b === c){
  console.log('Equilateral Triangle');
} else if((a === b) || (b === c) || (c === a)){
  console.log('Isosceles Triangle');
} else if((a !== b) && (b !== c)){
  console.log('Scalene Triangle');
}