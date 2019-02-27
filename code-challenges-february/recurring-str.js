/* First Recurring Character 

1. count = { } // dictionary or hash table
2. loop through str
3 if char in count 
4 return char
5 counts[char] = 1
6 return null or none if nothing is found


*/

let input = "DBCABA";
function recurringChar(str) {
  let counts = {};

  for (let char in str) {
    if (counts.hasOwnProperty(str[char])) {
      return char;
    }
    counts[str[char]] = 1;
  }
  console.log(counts);
  return null;
}
recurringChar(input);

//======== solution two ===============
// function recurringStr(str) {
//   let counts = {};

//   for (let i in str) {
//     counts[str[i]] = 1 + (counts[str[i]] || 0);
//   }
//   console.log(counts);
// }
