// Write a function called getProduct that gets the product of all the integers at the array EXCEPT the one at that index.

// For example, given [1, 9, 6, 5, 2] your function should return [540, 60, 90, 108,  270], because the calculation looks like this:

// [9 * 6 * 5 * 2, 1 * 6 * 5 * 2, 1 * 9 * 5 * 2, 1 * 9 * 6 * 5].

// Edge cases:
// No division, as some arrays may include 0.
// Target time: O(n).

function getProduct(arr) {
  let result = [];
  for (let i in arr) {
    let n = 1;

    for (let j in arr) {
      console.log(`i ${arr[i]}   =    ${arr[j]} j`);
      if (i !== j) {
        n *= arr[j];
      }
    }
    result[i] = n;
  }
  return result;
}
getProduct([1, 9, 6, 5, 2]);
// i 1   =    1 j
// i 1   =    9 j
// i 1   =    6 j
// i 1   =    5 j
// i 1   =    2 j
// i 9   =    1 j
// i 9   =    9 j
// i 9   =    6 j
// i 9   =    5 j
// i 9   =    2 j
// i 6   =    1 j
// i 6   =    9 j
// i 6   =    6 j
// i 6   =    5 j
// i 6   =    2 j
// i 5   =    1 j
// i 5   =    9 j
// i 5   =    6 j
// i 5   =    5 j
// i 5   =    2 j
// i 2   =    1 j
// i 2   =    9 j
// i 2   =    6 j
// i 2   =    5 j
// i 2   =    2 j
// => [ 540, 60, 90, 108, 270 ]
//output [540, 60, 90, 108,  270]
//[  9 * 6 * 5 * 2, 540
// 1 * 6 * 5 * 2, 60
// 1 * 9 * 6 * 2, 108
// 1 * 9 * 6 * 5
// ].
//Target time: O(n).

// Lambda Solution

function getProduct(arr) {
  const ans = [];
  let soFar = 1;
  for (let i = 0; i < arr.length; i++) {
    ans[i] = soFar;
    soFar *= arr[i];
  }
  soFar = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    ans[i] *= soFar;
    soFar *= arr[i];
  }
  return ans;
}

// wrong but good for notes
// let len = arr.length
// let temp = []
// let product = 1

// for(let i = 0 ; i < len; i++) {
//   product *= arr[i]
// }
//   console.log('-',arr)
// for(let i = 0 ; i < len; i++) {
//   temp.push(product/arr[i])
// }
// return temp
