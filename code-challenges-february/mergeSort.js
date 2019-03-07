function mergeSort(arr) {
  if(arr.length === 1){
    return arr
  }
  const mid = Math.floor(arr.length / 2) 
  const left = arr.slice(0 , mid)
  const right = arr.slice(mid)
    return merge( mergeSort(left) , mergeSort(right) )
 }
 
   //[1] while node1 and node2 is not empty
   //[2] push if node1[0] is less than node2[0] ? if it is shift node 1 : node 2
   //[3] shift remove the 1st index so node1[0] will always be the next item
   //[4] then concat result to node1 if there is node1 else concat node2
// compare the arrays item by item and return the concatenated result
function merge (left, right) {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

 mergeSort([1, 6, 3, 2, 4, 7])
 //The shift() method removes the first element from an array 
 //and returns that removed element. This method changes the length of the array.
 //example
// const testArr = [1,2,3]
// const removedNum = testArr.shift()
// removedNum


// [ 1, 2, 4, 6, 3 ,7 ] 
// check left if less than right left left < right ? 
// [ 1, 6, 3 ]   [ 2, 4, 7 ]
// [ 6, 3 ]      [ 2, 4, 7 ]
// [ 6, 3 ]      [  4, 7 ]
// [ 6, 3 ]      [ 7 ]
// [ 6, 3 ]      [ 7 ]
// [ 3 ]         [ 7 ]
