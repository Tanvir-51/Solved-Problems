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