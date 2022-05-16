/*function collectOddValues(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1,2,3,4,5])*/





//practice
function collectOddValues(arr){
    
    //consider any obvious edge cases or constraints
    if(arr.length === 0 ){
        return arr; //if you write return only it will retun undefined, and that is why you return the empty array
    }
    //create an empty array
    let arr2 = [];
    //write a condition in which the odd values are filterd and pushed into an empty array
    if(arr[0] % 2 != 0 ){
        arr2.push(arr[0])
    }
    //call the function again using slice to remove the first number
    
    //concatenate all the callbacks and return the final array
    arr2 = arr2.concat(collectOddValues(arr.slice(1)))
    return arr2;
}

collectOddValues([1,2,3,4,5])




                                        
                                                                
                                                                             
                            
            