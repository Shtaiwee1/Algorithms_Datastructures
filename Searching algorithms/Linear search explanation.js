//There are many different search methods on arrays in JavaScript:

//indexOf
//includes
//find
//findIndex


//Linear Search Pseudocode:
/*1-This function accepts an array and a value
2-Loop through the array and check if the current array element is equal to the value
3-If it is, return the index at which the element is found
4-If the value is never found, return -1*/



//Example

function linearSearch(arr , num){
    //consider any edge cases or constraints
    if(arr.length < 1) return -1;
    //loop through the array
    for(let i = 0 ; i< arr.length ; i++){
       //compare each element with the given value
        if (arr[i] == num){
           //return the index if found or -1 if not
            return i;
        }
    }
  return -1;
   
   
    
  //
}


//linearSearch([10,15,20,25,30] , 15)
//linearSearch([100] , 100)
//linearSearch([100] , 200)
//linearSearch([9,8,7,6,5,4,3,2,1,0],4)