/*

Return the length of the longest word in the provided sentence.

Your response should be a number.

*/

function findLongestWordLength(str) {
  let currentLength = 0;
  let longestLength = 0;

  for(let i = 0; i < str.length; i++){
    if(str[i] === " "){
      if(currentLength > longestLength){
        longestLength = currentLength;
      }
        currentLength = 0;
    } else{
      currentLength++;
    }
  }
  if(currentLength > longestLength){
    longestLength = currentLength;
  }
  return longestLength;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');



// alternative solutions

2. 

function findLongestWordLength(str) {
  let words = str.split(' ');
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}


3. 

function findLongestWordLength(s) {
  return s
    .split(' ')
    .reduce((longest, word) => Math.max(longest, word.length), 0);
}

