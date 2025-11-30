/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
*/

// solution 1
function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  } else {
    return str.slice(0, num) + "...";
  }
}

// solution 2
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
