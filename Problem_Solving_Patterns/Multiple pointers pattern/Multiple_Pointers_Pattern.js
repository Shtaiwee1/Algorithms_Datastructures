

//sumZero([-3,-2,-1,0,1,2,3]) // [-3,3] 
//sumZero([-2,0,1,3]) // undefined
//sumZero([1,2,3]) // undefined


//naive solution


/*function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}
Time Complexity - O(N^2)

Space Complexity - O(1)*/



//best solution
//REFACTOR

function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if(sum > 0){
            right--;
        } else {
            left++;
        }
    }
}
//Time Complexity - O(N)

//Space Complexity - O(1)
