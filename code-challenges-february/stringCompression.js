/*
Good morning! Implement a method to perform basic string compression using the counts of repeated characters.

For example, the string  'aabcccccaaa' would become a2b1c5a3.

If the "compressed" string would not become smaller than the original string, then your method should return the original string.

You can assume the string has only uppercase and lowercase letters (a - z).
*/

// ==================== solution 1 ====================
function stringCompression(str) {
  let len = str.length;
  resStr = "";

  for (let i = 0; i < len; i++) {
    let val = str[i];
    let count = 1;
    while (val === str[i + count]) {
      count++;
    }
    resStr += val + count;
    i += count - 1;
  }

  if (str.length <= resStr.length) return str;
  return resStr;
}
stringCompression("aabcccccaaa");
//output = "a2b1c5a3"

// ==================== solution 2 ====================

function stringCompression(str) {
  let cmpresd = "";
  const arr = [];
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === str.charAt(i + 1)) {
      count++;
    } else {
      arr.push(`${str.charAt(i)}${count}`);
      count = 1;
    }
  }
  for (let j = 0; j < arr.length; j++) {
    cmpresd += arr[j];
  }
  if (cmpresd.length < str.length) {
    return cmpresd;
  } else {
    return str;
  }
}
// ==================== solution 3 ====================

// // v1.1 .split, .forEach() & .charAt()
// function stringCompression(str) {
//   let charArr = str.split('');
//   let cmpresd = '';
//   const arr = [];
//   let count = 1;
//   charArr.forEach(function(item, i) {
//     if (item === str.charAt(i + 1)) count++;
//     else {
//       arr.push(`${item}${count}`);
//       count = 1;
//     }
//   });
//   arr.forEach(function(item) {
//     cmpresd += item;
//   });
//   if (cmpresd.length < str.length) return cmpresd;
//   else return str;
// }

// ==================== solution 4 ====================

// // v2.0 All in one for loop with Logical OR || and Conditional Ternary operator.
// function stringCompression(str) {
//   let curChar = null;
//   let cmpresd = '';
//   let count = 1;
//   for (let i = 0; i <= str.length; i++) {
//     if (str[i] === curChar) count++;
//     if (curChar === null) curChar = str[i];
//     if (str[i] !== curChar || str[i] === undefined) {
//       cmpresd += curChar;
//       cmpresd += count;
//       count = 1;
//       curChar = str[i];
//     }
//   }
//   return cmpresd.length < str.length ? cmpresd : str;
// }
