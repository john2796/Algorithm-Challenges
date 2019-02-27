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
