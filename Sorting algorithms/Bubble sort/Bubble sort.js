// UNOPTIMIZED VERSION OF BUBBLE SORT
/*function bubbleSort(arr){
  for(var i = arr.length; i > 0; i--){
    for(var j = 0; j < i - 1; j++){
      console.log(arr, arr[j], arr[j+1]);
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;         
      }
    }
  }
  return arr;
}
*/



//another solution
// ES2015 Version
/*
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);
*/



//optimized version of bubble SORT
function bubbleSort(arr){
  let noSwaps;
  for(var i = arr.length; i > 0; i--){
    for(var j = 0; j < i - 1; j++){
      noSwaps = true;
      //console.log(arr, arr[j], arr[j+1]);
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp; 
        noSwaps = false
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);
//no swaps check condition is inserted to break the loop as soon as the array is sorted and no more looping is needed so that can save a lot of time


//practice
/*
function bubbleSort(arr){
    //consider any edge cases or constraints
    if(arr.length === 0 )return arr;
    //make a for loop that begins at the end of the array and decrements backwards
    for(let i=arr.length ; i > 0  ; i --){
        //make another for loop that begins at the beginning if the array
        for(let j = 0 ; j< i - 1 ; j++){
            //in each loop two consecutive elements will be compared
            if(arr[j] > arr[j+1]){
                //if the first element is bigger swap, if not don't do anything
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
        }
    }
    //return the final array
    return arr  
}


bubbleSort([8,1,2,3,4,5,6,7]);
*/



//refactor practice
/*
function bubbleSort(arr){
  const swap = (arr , idx1 , idx2) => 
    [arr[idx1] , arr[idx2]] = [arr[idx2] , arr[idx1] ]

for( let i = arr.length ; i > 0 ; i --){
  for(let j = 0 ; j < i-1 ; j++){
    if (arr[j] > arr [j+1]){
      swap(arr , j , j+1)
    }
  }
  
}
return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);
bubbleSort([8,1,2,3,4,5,6,7 ,-1 ,-2]);*/