
/*
function pivot(arr, start = 0, end = arr.length - 1) { //default values for start and end are not mandatory and they will not affect the final result or functionality
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


function quickSort(arr, left = 0, right = arr.length -1){//here the default values of left and right are important
    if(left < right){
        let pivotIndex = pivot(arr, left, right) //3
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right);
      }
     return arr;
} 
           
quickSort([100,-3,2,4,6,9,1,2,5,3,23])
*/



// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1



//practice
//helper function will include swap function and will take arr , start , and end points 


function quickSort(arr , start , end ){
   const swap=(arr , idx1 , idx2) =>{
    [arr[idx1] , arr[idx2]] = [arr[idx2] , arr[idx1]]
  }
//swap function will take arr , idx1 , idx2 as parameters
  
  let pivot = arr[start];
  let swapIdx=start;//swapIdx must be equal to start at the beginning not equal to zero which will lead to a stackoverflow error
  for(let i=start+1 ; i < arr.length ; i++){
    if(pivot > arr[i]){
      swapIdx++;
      swap(arr , swapIdx , i)
    }
  }
  swap(arr , start , swapIdx)
  return swapIdx
}

//quickSort([4,8,2,1,5,7,6,3])

function sort(arr , left=0 , right = arr.length-1){

    if(left < right){  //using while instead of if here will lead to a stackoverflow error
  let pivotIndex = quickSort(arr , left , right);
  
  sort(arr ,left , pivotIndex-1);
  sort(arr ,pivotIndex+1 , right);
    }
  return arr;
}
sort([100,-3,2,4,6,9,1,2,5,3,23])
//
