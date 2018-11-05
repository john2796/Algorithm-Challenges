/// Working with Object

// write a function called 'addProperty'
// Given an object, and a key, 'add Property" sets a new property on the given object with a value of true.

//  1  =======================================================================
// addProperty Challenge

const myObj = {};
function addProperty(obj, key) {
  // sets a new property on the given object with a value of true.
  return (obj[key] = true);
}

addProperty(myObj, "myProperty");
console.log(myObj.myProperty); // true

//=======================================================================

//  2  =======================================================================
// getProperty Challenge

// Write a function called 'getProperty'.
// Given an object and a key, 'getProperty' returns the value of the property at the given key.
// Notes: If there is no property at the given key, it should return undefiened

const obj = {
  key: "value"
};
function getProperty(obj, key) {
  return obj[key];
}

const output = getProperty(obj, "key");
console.log(output);

//    =======================================================================

//  3  =======================================================================
// removePropert Challenge
// Write a function called "removeProperty"
// Given an object and a key "removeProperty" removes the given key from the given object

const obj = {
  name: "Sam",
  age: 20
};
function removeProperty(obj, key) {
  return delete obj["key"];
}
removeProperty(obj, "name");
console.log(obj.name);

//    =======================================================================

//  4 =======================================================================
/* checkAge Challenge
 Instruction 
 Given person's name and age , "checkAge" returns one of two messages:
 "Go home, {insert_name_here}!", if they are younger than 21."Welcome, {insert_name_here}!", if they are 21 or older.

Naturally, replace "{insert_name_here}" with the given name. :)
*/

function checkAge(name, age) {
  // your code
  return age >= 21 ? `Welcome, ${name}!` : `Go home, ${name}!`;
}
const output = checkAge("Adrian", 22);
console.log(output); // --> 'Welcome, Adrian!'
// =======================================================================

//  5  =======================================================================
/* Write a function called "getLengthOfWord
*/
function getLengthOfWord(word) {
  return word.length;
}

var output = getLengthOfWord("some");
console.log(output); // --> 4

// =======================================================================

//  6  =======================================================================
/* Write a function called "isGreaterThanTen"
Given a number, "isGreaterThanTen(11)"
*/

function isGreaterThanTen(num) {
  return num >= 10 ? true : false;
}
const output = isGreaterThanTen(11);
console.log(output); // --> true
// =======================================================================

//  7  =======================================================================
/* Write a function called "isOdd"
Given a number , "isOdd" returns wheter the given numer is odd.
*/

function isOdd(num) {
  return num % 3 === 0 ? true : false;
}

const output = isOdd(9);
console.log(output); //--> true
// =======================================================================

//  8  =======================================================================
/* Write a function called "isSameLength".
Given two words, "isSameLength" returns whether the given words have the same length.
*/

function isSameLength(word1, word2) {
  return word1.length === word2.length;
}
const output = isSameLength("words", "super");
console.log(output); // ---> true
// =======================================================================

//  9  =======================================================================
/* Write a function called "areBothOdd"
Given 2 numbers, "areBothOdd" returns whether or not both of the given numbers are oldd.
*/

function areBothOdd(num1, num2) {
  return num1 && num2 % 3 === 0;
}

const output = areBothOdd(1, 3);
console.log(output); // ---> true
// =======================================================================

//  10  =======================================================================
/* Write a function called "average".
Given two numbers, "average" returns their average
*/

function average(num1, num2) {
  return (num1 + num2) / 2;
}
const output = average(4, 6);
console.log(output); //--> 5
// =======================================================================

//  11  =======================================================================
/* Write a function called "computeAreaOfATriangle"
Given the base  and heigh of a triangle, "computeAreaOfTriangle" returns its area
*/

function computeAreaOfATriangle(base, height) {
  return (base * height) / 2;
}

const output = computeAreaOfATriangle(4, 6);
console.log(output); // ---> 12
// =======================================================================

//  12  =======================================================================
/* Write a function called "computePerimeterOfARectangle"
Given a length and a width describing a reactablge, 'computePerimeterOfARectangle' returns its perimter.
*/

function computePerimeterOfARectangle(length, width) {
  return length * 2 + width * 2;
}
const output = computePerimeterOfARectangle(5, 2);
console.log(output); // ---> 14
// =======================================================================

//  13  =======================================================================
/*  Write a function called "cube".
Given a number, "cube" returns the cube of the number .
*/

function cube(num) {
  return Math.pow(num, 3);
}
var output = cube(4);
console.log(output); // ---> 27
// =======================================================================

//  14  =======================================================================
/* Write a function called "square"
Given a number , "square" should return the square of the given number.
*/

function square(num) {
  return Math.pow(num, 2);
}

const output = square(5);
console.log(output); // ---> 25
// =======================================================================

//  15  =======================================================================
/* Write a function called "computeAverageLengthOfWords".
Given two words, "computeAverageLengthOfWords" returns the average of their length.
*/

function computeAverageLengthOfWords(word1, word2) {
  return (word1.length + word2.length) / 2;
}

var output = computeAverageLengthOfWords("code", "programs");
console.log(output); // --> 6
// =======================================================================

//  16  =======================================================================
/* Write a function called "addFullNameProperty"
Given an object that has a 'FirstName" property and a 'lastName" property , 'addFullNameProperty" returns a 'FullName' property whose value is a string with the first name and separated by a space.
*/

function addFullNameProperty(obj) {
  var fullName = obj.firstName + " " + obj.lastName;
  obj.fullName = fullName;
  return obj;
}

var person = {
  firstName: "Jade",
  lastName: "Smith"
};

addFullNameProperty(person);
console.log(person.fullName);

// =======================================================================

//  17  =======================================================================
/* Write a function called "addObjectProperty"
Given two objects and a key. " addObjctProperty" sets a new property on the 1st object at the given key. The value of that new property is the entire 2nd object.
*/

const person1 = {
  name: "Joe Blow",
  role: "schlub"
};
const person2 = {
  name: "Mr. Burns",
  role: "supervisor"
};

function addObjectProperty(obj1, key, obj2) {
  obj1[key] = obj2;
  return obj1;
}

addObjectProperty(person1, "manager", person2);
console.log(person1.manager); // --> { name: 'Mr. Burns', role: 'supervisor' }

// =======================================================================

//  18  =======================================================================
/* Write a function called "isPersonOldEnoughToDrinkAndDrive"
Given a "person" object, that contains an "age" property, "isPersonOldEngoughToDrink" returns whether the given perosn is old enough to legally drink and drive in the United States
Note : The legal drinking age in the United States is 21. The legal driving age in the United States is 16. It is always illegal to drink and drive in the United States.
*/

const obj = {
  age: 45
};
function isPersonOldEnoughToDrinkAndDrive(obj) {
  return false; // it's always illegal to drink and drive in the US
}

const output = isPersonOldEnoughToDrinkAndDrive(obj);
console.log(output); // false

obj.age;
// =======================================================================

//  19  =======================================================================
/* Write a function called "isPersonOldEnoughToDrive"
Given a "person" object, that contains an "age" property, "isPersonOldEnoughtToDrive" returns whether the given person is old enough to drive.
Notes: The legal driving age in the United States is 16.
*/
const obj = {
  age: 16
};
function isPersonOldEnoughToDrive(person) {
  return person.age >= 16 ? true : false;
}
const output = isPersonOldEnoughToDrive(obj);
console.log(output); // --> true
// =======================================================================

//  20  =======================================================================
/*  Write a funciton  called "addArrayProperty" 
Given an object, a key , and an array, "addArrayProperty" sets a new property on the object at the given key, with its value set to the given array.
*/

const myArray = [1, 3];

function addArrayProperty(obj, key, arr) {
  obj[key] = arr;
  return arr;
}
addArrayProperty(myObj, "myProperty", myArray);
console.log(myObj.myProperty); // --> [1, 3]
// =======================================================================

//  21  =======================================================================
/* Write a function called "getNthElement".
Given an array and an integer, "getNthElement" returns the element at the given integer, within the given array.
Notes : If the array has a length of 0, it should return 'undefiened'
*/

function getNthElement(array, n) {
  return array[n];
}
var output = getNthElement([1, 2, 3], 1);
console.log(output);
// =======================================================================

//  22  =======================================================================
/* Write a funciton called "getsFirstElmenet".
Given an array, "getFirstElment" returns the first element of the given array. 
Notes: If the given array has a length of 0, it should return undefined.
*/

function getFirstElement(array) {
  return array[0];
}
const output = getFirstElement([1, 2, 3, 4, 5]);
console.log(output); // --> 1
// =======================================================================

//  23  =======================================================================
/* Write a function called "getLastElement" 
Given an array, "getLastElement" returns the last element of the given array. 
Note: If the given array has a length of 0, it should return 'udefined'
*/

function getLastElement(array) {
  return array[array.length - 1]; //this means: array[index[4]] as the length of the array is 5.
}
const output = getLastElement([1, 2, 3, 4]);
console.log(output); // --> 4
// =======================================================================

//  24  =======================================================================
/*  Write a function called "addToFront".
Given an array and an element, "addToFront" adds the given element to the front of the given array, and returns the given array.
Note: It should be the SAME array, not a new array.
*/

function addToFront(arr, element) {
  arr.unshift(element);
  return arr;
}
var output = addToFront([2, 3, 4, 5], 1);
console.log(output);
// =======================================================================

//  25  =======================================================================
/* Write a function called "addToBack".
Given an array and an element, "addToback" returns the given array with the givent element added to the end.
*/

function addToBack(arr, element) {
  arr.push(element);
  return arr;
}
const output = addToBack([1, 2], 3);
console.log(output); // -> [1, 2, 3]
// =======================================================================

//  26  =======================================================================
/*  Write a function called "computeAreaOfARectangle".
  Given the length and width of a rectangle, "computeAreaOfAReactangle" returns its area.
  */

function computeAreaOfARectangle(length, width) {
  return length * width;
}

const output = computeAreaOfARectangle(4, 8);
console.log(output); // --> 32
// =======================================================================

//  27  =======================================================================
/* Write a function called "computePerimeterOfARectangle".
Given a length and a width describing a rectangle, "computePerimeterOfARectangle" returns its perimter.
*/

function computePerimeterOfARectangle(length, width) {
  return length * 2 + width * 2;
}

const output = computePerimeterOfARectangle(5, 2);
console.log(output); // --> 14
// =======================================================================

//  28  =======================================================================
/*  Write a function called "computePerimeterOfATriangle".
Given 3 sides describing a triangle, "computePerimeterOfATriangle" returns its perimter.
*/

function computePerimeterOfATriangle(side1, side2, side3) {
  return side1 + side2 + side3;
}

const output = computePerimeterOfATriangle(6, 4, 10);
console.log(output); // --> 20
// =======================================================================

//  29  =======================================================================
/* Write a function called "computeTripledAreaOfARectangle".
Given a length and width of a rectangle, "computeTripledAreaOfARectangle" returns the rectangle's area, multiplied by 3.
*/

function computeTripledAreaOfARectangle(length, width) {
  return length * width * 3;
}
const output = computeTripledAreaOfARectangle(2, 4);
console.log(output);

// =======================================================================

//  30  =======================================================================
/* 
Write a function called "computePerimeterOfACircle".
Given the radius of a circle, "computePerimeterOfACircle" returns its perimeter.
*/

function computePerimeterOfACircle(radius) {
  return 2 * Math.PI * radius;
}
const output = computePerimeterOfACircle(4);
console.log(output);
// =======================================================================

//  31  =======================================================================
/*  Write a function called "computeAreaOfACircle".
Given the radius of a circle, "computeAreaOfACircle" returns its area.
*/

function computeAreaOfACircle(radius) {
  return Math.PI * radius * radius;
}
const output = computeAreaOfACircle(4);
console.log(output); // --> 50.26548245743669
// =======================================================================

//  32  =======================================================================
/* Write a function called "computePwer"
Given a number and an exponent , "computePower" returns the given number, raised to the given exponent
*/

//first solution
function computePower(num, exponent) {
  var result = 1;
  for (i = 0; i < exponent; i++) {
    result = result * num;
  }
  return result;
}
var output = computePower(2, 6);
console.log(output);

//second solution
function computePower(num, exponent) {
  return Math.pow(num, exponent);
}
const output = computePower(2, 6);
console.log(output); // ---> 8
// =======================================================================

//  33  =======================================================================
/* Write a function called "computeSquareRoot"
Given a number, "computeSquareRoot" returns its square root.
*/

//first solution
function computeSquareRoot(num) {
  // your code here
  return Math.sqrt(num);
}
const output = computeSquareRoot(9);
console.log(output); // ---> 3

// Second solution
function computeSquareRoot(num) {
  if (num === 0) return 0;
  let guess = 1;
  for (let i = 0; i < num; i++) {
    guess = (guess + num / guess) / 2;
  }
  return guess;
}
computeSquareRoot(9);
// =======================================================================

//  34  =======================================================================
// Write a function called "doubleSquareRootOf".
// Given a number , "doubleSquareRootOf" returns double its square root.
// Write a function called "doubleSquareRootOf".
// first Solution '
function doubleSquareRootOf(num) {
  // your code here
  let guess = 1;
  for (let i = 0; i < num; i++) {
    guess = (guess + num / guess) / 2;
  }
  return guess * 2;
}
const output = doubleSquareRootOf(121);
console.log(output); // ---> 22
// Second Solution
function doubleSquareRootOf(num) {
  // your code here
  return Math.sqrt(num) * 2;
}
const output = doubleSquareRootOf(121);
console.log(output); // ---> 22

// =======================================================================

//  35  =======================================================================
/* Write a function called "getLengthOfThreeWords".
Given 3 words, "getLengthOfThreeWords" returns the sum of their lengths.
*/
function getLengthOfThreeWords(word1, word2, word3) {
  // your code here
  return word1.length + word2.length + word3.length;
}
const output = getLengthOfThreeWords("some", "other", "words");
console.log(output); // --> 14
// =======================================================================

//  36  =======================================================================
/* Write a function called "joinArrays".
Given two arrays, "joinArrays" returns an array with the elements of "arr1" in order, followed by the elements in "arr2". 
You should be familiar with the "concat" method for this problem. 
*/
function joinArrays(arr1, arr2) {
  // your code here
  return arr1.concat(arr2);
}
const output = joinArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]
// =======================================================================

//  37  =======================================================================
/* Write a function called "getElementsAfter".
Given an array and an index, "getElementsAfter" returns a new array with all the elements after (but not including) the given index.
*/
function getElementsAfter(arr, n) {
  return arr.splice(n + 1);
}
const output = getElementsAfter(["a", "b", "c", "d", "e"], 1);
console.log(output); // --> ['d', 'e']
// =======================================================================

//  38  =======================================================================
/*  Write a function called "getElementsUpTo".
Given an array and a index, "getElementsUpTo", returns an array with all the elements up until, but not including, the element at the given index.
Notes:* In order to do this you should be familiar with the 'splice' method.
*/
function getElementsUpTo(arr, n) {
  return arr.slice(0, n);
}
const output = getElementsUpTo(["a", "b", "c", "d", "e"], 3);
console.log(output); // --> ['a', 'b', 'c']
// =======================================================================

//  39  =======================================================================
/* Write a function called "getAllElementsButFirst".
Given an array, "getAllElementsButFirst" returns an array with all the elements but the first.
*/
const input = [1, 2, 3, 4];
function getAllElementsButFirst(array) {
  // your code here
  return array.splice(1);
}
const output = getAllElementsButFirst(input);
console.log(output); // --> [2, 3, 4]
// =======================================================================

//  40  =======================================================================
/* Write a function called "getAllElementsButLast".
Given an array, "getAllElementsButLast" returns an array with all the elements but the last.
*/
const input = [1, 2, 3, 4];
function getAllElementsButLast(array) {
  return array.splice(0, array.length - 1);
}
const output = getAllElementsButLast(input);
console.log(output); // --> [1, 2 , 3]
// =======================================================================

//  41  =======================================================================
/* Write a function called "removeFromFront".
Given an array, "removeFromFront" returns the given array with its first element removed.
Notes:* You should be familiar with the method 'shift'.
*/
function removeFromFront(arr) {
  arr.shift(); //modifies array
  return arr; //return new array
}
const output = removeFromFront([1, 2, 3]);
console.log(output); // --> [2, 3]
// =======================================================================

//  42  =======================================================================
/*  Write a function called "removeFromBackOfNew".
Given an array, "removeFromBackOfNew" returns a new array containing all but the last element of the given array.
Notes:* You should be familiar with the 'slice' method.
*/
const arr = [1, 2, 3];
function removeFromBackOfNew(arr) {
  return arr.slice(1);
}
const output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]
// =======================================================================

//  43  =======================================================================
/* Write a function called "removeFromFrontOfNew".
Given an array, "removeFromFrontOfNew" returns a new array containing all but the first element of the given array.
Notes:* You should be familiar with the 'slice' method.
*/
const arr = [1, 2, 3];
//1 solution
function removeFromFrontOfNew(arr) {
  return arr.slice(1, 3);
}
const output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]

// 2
function removeFromFrontOfNew(arr) {
  // your code here
  var newArr = arr.slice(arr[0], arr.legth);
  return newArr;
}
var output = removeFromFrontOfNew([1, 2, 3]);
console.log(output);

//3
function removeFromFrontOfNewWithLoop(arr) {
  var newArray = [];

  for (var i = 1; i < arr.length; i++) {
    newArray.push(arr[i]);
  }
  return newArray;
}
var output = removeFromFrontOfNewWithLoop([1, 2, 3]);
console.log(output);
// =======================================================================

//  44  =======================================================================
/* Write a function called "countCharacter".
Given a string input and a character, "countCharacter" returns the number of occurences of a given character in the given string.
*/
function countCharacter(string, character) {
  let characterCounter = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i] === character) {
      characterCounter += 1;
    }
  }
  return characterCounter;
}

var output = countCharacter("I am a hacker", "a");
console.log(output);
// =======================================================================

//  45  =======================================================================
/* Write a function called "getAllLetters".
Given a word, "getAllLetters" returns an array containing every character in the word. 
Notes:* If given an empty string, it should return an empty array.
*/

function getAllLetters(str) {
  // your code here
  return str.split("");
}
var output = getAllLetters("Radagast");
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
// =======================================================================

//  46  =======================================================================
/* Write a function called "getAllWords".
Given a sentence, "getAllWords" returns an array containing every word in the sentence. 
Notes:* If given an empty string, it should return an empty array.
*/
function getAllWords(str) {
  return str.split(" ");
}
const output = getAllWords("Radagast the Brown");
console.log(output); // --> ['Radagast', 'the', 'Brown']
// =======================================================================

//  47  =======================================================================
/*  Write a function called "removeFromBack".
Given an array, "removeFromBack" returns the given array with its last element removed.
Notes:* You should be familiar with the method 'pop'.
*/

function removeFromBack(arr) {
  arr.pop();
  return arr;
}
const output = removeFromBack([1, 2, 3]);
console.log(output); // --> [1, 2]
// =======================================================================

//  48  =======================================================================
/*  Write a function called "or".
Given 2 boolean expressions, "or" returns true or false, corresponding to the || operator.
Notes:* Do not use the || operator.* Use ! and && operators instead.
*/
function or(expression1, expression2) {
  if (!expression1 && !expression2) return false;
  return true;
}
const output = or(true, true);
console.log(output); // --> true
// =======================================================================

//  49  =======================================================================
/* Write a function called "isEitherEvenOrAreBoth7".
Given two numbers, "isEitherEvenOrAreBoth7" returns whether at least one of them is even, or, both of them are 7
*/
function isEitherEvenOrAreBoth7(num1, num2) {
  if (num1 % 2 === 0 || num2 % 2 === 0 || (num1 === 7 && num2 === 7)) {
    return true;
  } else {
    return false;
  }
  // returns whether at least one of them is even, or, both of them are 7.
}
var output = isEitherEvenOrAreBoth7(3, 7);
console.log(output); // --> false

var output = isEitherEvenOrAreBoth7(2, 3);
console.log(output); // --> true
// =======================================================================

//  50  =======================================================================
/*  Write a function called "isEitherEvenAndLessThan9".
Given two numbers, 'isEitherEvenAndLessThan9' returns whether at least one of them is even, and, both of them are less than 9.
*/
function isEitherEvenAndLessThan9(num1, num2) {
  if ((num1 % 2 === 0 || num2 % 2 === 0) && (num1 < 9 && num2 < 9)) {
    return true;
  } else {
    return false;
  }
}
const output = isEitherEvenAndLessThan9(2, 4);
console.log(output); // --> true

// =======================================================================

//  51  =======================================================================
/* 
*/
// =======================================================================

//  52  =======================================================================
/* 
*/
// =======================================================================

//  53  =======================================================================
/* 
*/
// =======================================================================

//  54  =======================================================================
/* 
*/
// =======================================================================

//  55  =======================================================================
/* 
*/
// =======================================================================

//  56  =======================================================================
/* 
*/
// =======================================================================

//  57  =======================================================================
/* 
*/
// =======================================================================

//  58  =======================================================================
/* 
*/
// =======================================================================

//  59  =======================================================================
/* 
*/
// =======================================================================

//  60  =======================================================================
/* 
*/
// =======================================================================

//  61  =======================================================================
/* 
*/
// =======================================================================

//  62  =======================================================================
/* 
*/
// =======================================================================

//  63  =======================================================================
/* 
*/
// =======================================================================

//  64  =======================================================================
/* 
*/
// =======================================================================

//  65  =======================================================================
/* 
*/
// =======================================================================

//  66  =======================================================================
/* 
*/
// =======================================================================

//  67  =======================================================================
/* 
*/
// =======================================================================

//  68  =======================================================================
/* 
*/
// =======================================================================

//  69  =======================================================================
/* 
*/
// =======================================================================

//  70  =======================================================================
/* 
*/
// =======================================================================

//  71  =======================================================================
/* 
*/
// =======================================================================

//  72  =======================================================================
/* 
*/
// =======================================================================

//  73  =======================================================================
/* 
*/
// =======================================================================

//  74  =======================================================================
/* 
*/
// =======================================================================

//  75  =======================================================================
/* 
*/
// =======================================================================

//  76  =======================================================================
/* 
*/
// =======================================================================

//  77  =======================================================================
/* 
*/
// =======================================================================
