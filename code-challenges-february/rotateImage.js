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
