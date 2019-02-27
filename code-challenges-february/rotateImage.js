/*
 Given an image represented by an NxN matrix, where each pixel in the image is an integer from 0 - 9, write a method to rotate the image by 90 degrees counterclockwise. Can you do this in place?
Ex:
*/

function rotateImage(arr) {
  let ml = arr.length;
  const result = [];
  let index = arr[0].length - 1;
  let tempArr = [];

  while (result.length !== ml) {
    for (let i = 0; i < ml; i++) {
      tempArr.push(arr[i][index]);
    }
    result.push(tempArr);
    tempArr = [];
    index--;
  }
  return result;
}
rotateImage([[1, 2], [3, 4]]);
// output [ [2, 4],[1, 3]].

/* Added Lambda Solution
function rotateImage(arr) {
  const len = arr.length;
  for (let i = 0; i < len / 2; i++) {
    
    for (let j = i; j < len - i - 1; j++) {
      
      let bucket = arr[i][j];
      
      arr[i][j] = arr[j][len - i - 1];
      
      arr[j][len - i - 1] = arr[len - i - 1][len - j - 1];
      
      arr[len - i - 1][len - j - 1] = arr[len - j - 1][i];
      
      arr[len - j - 1][i] = bucket;
      
    }
    
  }
  return arr;
  
}
rotateImage([ [1, 2],
              [3, 4]]);


*/
