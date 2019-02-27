/*
Is one string a rotated version of another?
example :
String 1: 'hello world'
String 2: 'orldhello w'
--> true

*/

function isRotated(str1, str2) {
  // compare str 1 & str 2 : Is one str a rotated version of another
  console.log(str1 + str1);
  return str1.length == str2.length && (str1 + str1).indexOf(str2) !== -1;
}
isRotated("hello world", "orldhello w");
