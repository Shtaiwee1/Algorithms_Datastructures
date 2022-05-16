//Write a function called sumZero which accepts a sorted array of integers. The function 
//should find the first pair where the sum is 0. Return an array that includes both values 
   // that sum to zero or undefined if a pair does not exist


/*function sumZero(arr){
    //create two pointers (variables) one that points to the beginning of an array and one that poinnts to the end
    let left = 0
    let right = arr.length -1
    let sum;
    //When the array is sorted all the numbers on the right must be bigger than the numbers on the left
    for(let i= 0 ; i < arr.length ; i++){ //you can use a while loop instead
    if(right > left){
        sum=arr[left]+arr[right]
     //if the sum of the value was bigger than 0 decrement the right if it's smaller increment the left until you reach zero
     if(sum > 0){
        right--;
    }else if(sum<0){
        left++;
    }else if (sum==0){
         return [arr[left],arr[right]]
    }
    }
        
        }
   
    //when the sum is zero stoe the values and return the result
}


sumZero([-3,-2,-1,0,5,6,7])*/



//refactor use a while loop

function sumZero(arr){
    //create two pointers (variables) one that points to the beginning of an array and one that poinnts to the end
    let left = 0
    let right = arr.length -1
    let sum;
    //When the array is sorted all the numbers on the right must be bigger than the numbers on the left
    while(right > left) {//you can use a while loop instead
        sum=arr[left]+arr[right]
     //if the sum of the value was bigger than 0 decrement the right if it's smaller increment the left until you reach zero
     if(sum > 0){
        right--;
    }else if(sum<0){
        left++;
    }else if (sum==0){
         return [arr[left],arr[right]]
    }
    
        
        }
   
    //when the sum is zero stoe the values and return the result
}


sumZero([-3,-2,-1,0,2,6,7])







//another solution


/*function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
countUniqueValues([1,2,2,5,7,7,99])*/