//helper method recursion format and example

/*function outer(input){
    
    var outerScopedVariable = []

    function helper(helperInput){
        // modify the outerScopedVariable
        helper(helperInput--)
    }
    
    helper(input)

    return outerScopedVariable;

}*/






/*function collectOddValues(arr){
    
    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }
        
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        
        helper(helperInput.slice(1))
    }
    
    helper(arr)

    return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9])*/




//practice
/*
function recursiveOdd(arr){
    let result = [];
    
    function helper(arr2){
        if(arr2.length == 0){
            return;
        }
        if(arr2[0]%2 != 0){
            result.push(arr2[0])
        }
        return helper(arr2.slice(1))
        
    }
    helper(arr)
    return result
    
}*/


//recursiveOdd([1,2,3,4,5,6,7,8,9])



