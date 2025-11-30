/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
*/

function truncateString(str, num) {
  let newStr = "";
  let dot = "...";

  if (str.length <= num) {
    return str;
  } else {
    for (let i = 1; i <= num; i++) {
      newStr = str;
    }
    console.log(newStr);
    return newStr + dot;
  }

  // return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
