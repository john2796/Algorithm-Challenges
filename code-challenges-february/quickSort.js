/*QUICK SORT

Implement the quick sort sorting algorithm. Assume the input is an array of integers.

https://en.wikipedia.org/wiki/Quicksort

https://www.khanacademy.org/computing/computer-science/algorithms#quick-sort 
*/

function quickSort(nums) {
  if (nums.length <= 1) {
    return nums;
  } else {
    let left = [];
    let right = [];
    let newArray = [];
    let pivot = nums.pop();
    let length = nums.length;
    for (let i = 0; i < length; i++) {
      if (nums[i] <= pivot) {
        left.push(nums[i]);
      } else {
        right.push(nums[i]);
      }
    }

    return newArray.concat(quickSort(left), pivot, quickSort(right));
  }
}
quickSort([6, 5, 4, 3, 2, 1]);

//================ solution two

function quickSort(nums) {
  const arr = nums.slice();
  if (nums.length < 2) return nums;

  const lessThanOrEqualToPivot = [];
  const greaterThanPivot = [];
  const middleIndex = Math.floor(arr.length / 2);
  const pivot = arr.splice(middleIndex, 1);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot[0]) {
      lessThanOrEqualToPivot.push(arr[i]);
    } else {
      greaterThanPivot.push(arr[i]);
    }
  }

  return [].concat(
    quickSort(lessThanOrEqualToPivot),
    pivot,
    quickSort(greaterThanPivot)
  );
}

const arr1 = [0, 1, 2, 3, 4, 5, 6];
const arr2 = [9, 8, 7, 6, 5, 4, 3];
const arr3 = [1, 5, 5, 5, 5, 5, 9];
const arr4 = [55, -5, -10, 4];
console.log(`expect(quickSort([${arr1}]).toEqual([${quickSort(arr1)}])`);
console.log(`expect(quickSort([${arr2}]).toEqual([${quickSort(arr2)}])`);
console.log(`expect(quickSort([${arr3}]).toEqual([${quickSort(arr3)}])`);
console.log(`expect(quickSort([${arr4}]).toEqual([${quickSort(arr4)}])`);
