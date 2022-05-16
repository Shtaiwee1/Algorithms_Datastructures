//only works on sorted arrays

//Binary Search Pseudocode
/*1-This function accepts a sorted array and a value
2-Create a left pointer at the start of the array, and a right pointer at the end of the array
3-While the left pointer comes before the right pointer:
4-Create a pointer in the middle
5-If you find the value you want, return the index
6-If the value is too small, move the left pointer up
7-If the value is too large, move the right pointer down
8-If you never find the value, return -1*/


//Example
function binarySearch(arr , num){
  // create two pointers one at the beginning of an array and one at the end
    let left =0;
    let right = arr.length - 1
    let avg;
    //pick a middle point in the array and compare the value of it to the num
    while(left < right){
      
    avg = Math.floor((left+right)/2)
        if(arr[avg] == num)return avg;
        if (arr[avg] < num){
            left ++;
        }else{
            right--;
        }
        
    }
    return -1;
    
    //return the index of the value or -1 if it is not found.
}


//binarySearch([1,2,3,4,5] , 2)
//binarySearch([1,2,3,4,5] , 3)
//binarySearch([1,2,3,4,5] , 5)
//binarySearch([1,2,3,4,5] , 6)
//binarySearch([1,2,3,4,5] , 6)


//in the while loop you can use this 

//Refactored solution

// Refactored Version
/*function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

binarySearch([2,5,6,9,13,15,28,30], 103)*/