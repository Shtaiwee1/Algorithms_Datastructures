//#6


function maxSubarraySum(arr , num){
    //consider any edge cases or constraints
    if(num > arr.length)return null;
    //iterate over and add the first number of num elements
    let i=0;
    let temp = 0;
    while(i< num){
        temp +=arr[i];
        i++  
    }
    //store the result in a variable called max
    max = temp;
    //iterate over the rest of  the elements 
    for(let j= 0 ; j<arr.length - num ; j++){
        //in each loop you will substract the element of the first index in the subaray and add next element to the array
        temp = temp - arr[j] + arr[j+num]
        if(temp > max){
            // in each loop compare the max to the (temp) variable which is the sum for the current loop if it's larger than max assign it to max
            max = temp
        }
    }
    return max;
    
    
    
  
}

//maxSubarraySum( [100, 200 , 300 ,400], 2) // 700
//maxSubarraySum( [1 , 4, 2, 10, 23 ,3,1,0,20],4) // 39
//maxSubarraySum( [-3,4, 0, -2, 6,-1] , 2) // 5
//maxSubarraySum( [3, -2, 7, -4, 1,-1 , 4 , -2 , 1] , 2)//5
//maxSubarraySum( [2, 3], 3) //null




