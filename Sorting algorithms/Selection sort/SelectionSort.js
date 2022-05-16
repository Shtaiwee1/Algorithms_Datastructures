//Selection sort pseudo code

/*
1-Store the first element as the smallest value you've seen so far.
2-Compare this item to the next item in the array until you find a smaller number.
3-If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
4-If the "minimum" is not the value (index) you initially began with, swap the two values.
5-Repeat this with the next element until the array is sorted.
    */
/*

// LEGACY VERSION (non ES2015 syntax)
function sselectionSort(arr){
    for(var i = 0; i < arr.length; i++){
        var lowest = i;
        for(var j = i+1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest){
            //SWAP!
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

// ES2015 VERSION
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

selectionSort([0,2,34,22,10,19,17]);
*/



//practice selection sort
/*
function selectionSort(arr){
    //consider any edge cases or constraints
    //create a variable to store the lowest value 
    let lowest;
    //make the first loop
    for(let i=0 ; i < arr.length ; i++){
        lowest = i;
//make the second loop
        for(let j=i+1 ; j < arr.length ; j++){
          //console.log(arr[i] , arr[j] , arr[lowest])
// if a value smaller than the chosen value was found swap the lowest index the lowest new value index
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
//if the lowest value index is no longer i swap it's value with the value of i to move it to the beginning if the array;
      if(i !== lowest){
            temp = arr[i];
            arr[i] = arr[lowest]
            arr[lowest] = temp 
            
        }
       
    }
    return arr;
    
}

selectionSort([0,2,34,22,10,19,17]);
*/






//practice 
/*
function selectionSort(arr){
//we can write here :( const swap = (arr , idx1 , idx2) =>
[ arr[idx1] , arr[idx2]] = [ arr[idx2] , arr[idx1]])
  let lowest;
  for(let i=0 ; i< arr.length ; i++){
    lowest =i;
    for(let j= i+1 ; j< arr.length ; j++){
      if (arr[j] < arr[lowest]){
        lowest = j;
      }
    }
    if(lowest != i){
      temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp
//we can write here :swap(arr, i , lowest) instead of the three lines above to swap
    }
  }
  return arr;
}

selectionSort([0,2,34,22,10,19,17]);
*/