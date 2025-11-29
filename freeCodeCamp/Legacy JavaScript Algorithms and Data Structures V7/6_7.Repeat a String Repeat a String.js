/*

Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

*/

function repeatStringNumTimes(str, num) {
  let string = "";
  if (num <= 0) {
    return "";
  } else {
    for (let i = 1; i <= num; i++) {
      string += str;
      console.log(string);
    }
  }
  return string;
}

repeatStringNumTimes("abc", 3);
