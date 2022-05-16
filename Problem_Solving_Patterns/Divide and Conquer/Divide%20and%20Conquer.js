//#1

//Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the
   // value passed to the function is located. If the value is not found, return -1


//A naive solution


/*Linear Search

function search(arr, val){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return i;
        }
    }
    return -1;
}

Time Complexity O(N)*/




//refactor
//Time Complexity - Log(N) - Binary Search!



function search(array, val) {
 
    let min = 0;
    let max = array.length - 1;
 
    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        console.log(middle)
        let currentElement = array[middle];
 
        if (array[middle] < val) {
            min = middle + 1;
            //console.log(min)
        }
        else if (array[middle] > val) {
            max = middle - 1;
            //console.log(max)
        }
        else {
            return middle;
        }
    }
 
    return -1;
}

//search([1,2,3,4,5,6],4)
search([1,2,3,4,5,6],6)