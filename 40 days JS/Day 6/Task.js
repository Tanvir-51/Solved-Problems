// 1

function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

let temp = celsiusToFahrenheit(25)
console.log(temp);


// 2

function findMax(num1, num2) {
  if(num1 > num2){
    return num1;
  } else if(num2 > num1){
    return num2;
  } else {
    return "They're equal";
  }
}

let max = findMax(5, 5);
console.log(max);


// 3

function isPalindrome(str) {
  for (let i = 0, j = str.length - 1; i < str.length && j >= 0; i++, j--){
    if(str.charAt(i)=== str.charAt(j)){
      return 'palindrome';
    } else {
      return 'not palindrome';
    }
  }
}

console.log(isPalindrome('civic'))


// 4

function factorial(num) {
  if(num === 0) return 1;

  return num * factorial(num - 1);
}

let num = factorial(5);
console.log(num);


// 5

function countVowels(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if( str.charAt(i) === 'a' || str.charAt(i) === 'e' || str.charAt(i) ===  'i' || str.charAt(i) ===  'o' || str.charAt(i) ===  'u'){
      count++;
    }
  }
  return count;
}

let char = countVowels('hello');
console.log(char);


// 6
// Not solved properly

function capitalizeWords(sentence) {
  for (let i = 0; i < sentence.length; i++){
    if(sentence.charAt(i) === 'a'){
      let newSentence = sentence.charAt(i).toUpppercase();
      return newSentence;
    }
  }
}

let sentence = "i am tanvir";
console.log(sentence);




// 7

(function(lang) {
  console.log( "Hello, " + lang);
})("Javascript")


// 8

function greet(name, callback){
  name();
}

greet(function() {
  console.log("I am Tanvir");
})