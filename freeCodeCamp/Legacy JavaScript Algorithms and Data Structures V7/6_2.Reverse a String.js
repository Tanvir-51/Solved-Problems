/*
Reverse the provided string and return the reversed string.

For example, "hello" should become "olleh".

*/

function reverseString(str) {
  let revStre = '';
  for (let i = str.length - 1; i>=0; i--){
    revStre += str[i];
    // console.log(revStre)
  }
  // console.log(revStre)
  return revStre;
}

reverseString('hello');