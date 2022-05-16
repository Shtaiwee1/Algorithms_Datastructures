/*Quick Sort
Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot*/

/*Picking a pivot
The runtime of quick sort depends in part on how one selects the pivot
Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting
For simplicity, we'll always choose the pivot to be the first element (we'll talk about consequences of this later)*/

/*Pivot Pseudocode
It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
Grab the pivot from the start of the array 
Store the current pivot index in a variable (this will keep track of where the pivot should end up)
Loop through the array from the start until the end
If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
Swap the starting element (i.e. the pivot) with the pivot index
Return the pivot index*/

/*Quicksort Pseudocode
Call the pivot helper on the array
When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
Your base case occurs when you consider a subarray with less than 2 elements*/

/*

// First Version
function pivot(arr, start=0, end=arr.length+1){
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  var pivot = arr[start];
  var swapIdx = start;

  for(var i = start + 1; i < arr.length; i++){
    if(pivot > arr[i]){
      swapIdx++;
      swap(arr,swapIdx,i);
    }
  }
  swap(arr,start,swapIdx);
  return swapIdx;
}
*/
/*
// Version with ES2015 Syntax
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

pivot([4,8,2,1,5,7,6,3])

*/
