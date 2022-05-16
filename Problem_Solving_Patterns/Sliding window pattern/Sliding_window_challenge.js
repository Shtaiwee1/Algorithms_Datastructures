//Write a function called maxSubarraySum which accepts an array of integers and a number
//called n. The function should calculate the maximum sum of n consecutive elements in the array

//create the variable max and temp to compare , save and update the maximum value
let temp =0;
let max=0;
function maxSubarraySum(arr,num){
    if(num > arr.length){
        return false;
    }
    //create a for loop that sums the first n elements
    for(let i=0 ; i < num ; i++){
        //store the result in a variable
        temp+=arr[i] 
    }
    //save it to a var called max to compare and update in each round
    max = temp;
    //create another for loop for shifting the window
    for(let i=num ; i<arr.length ; i++ ){
        //Shift the window 1 digit and substract one value before and add one value after to get the new sum//
        temp = temp + arr[i]-arr[i-num]
          //compare and update the max value
    max = Math.max(temp , max)
    }
  return max;
    
}

//maxSubarraySum([1,2,5,2,8,1,5],2)
maxSubarraySum([1,2,5,2,8,1,5],4)
//maxSubarraySum([4,2,1,6],1)