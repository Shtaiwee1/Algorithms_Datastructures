//#3

//We use for of loop to iterate over an array
//we use for in loop to iterate over an object
//This object (arguments) is used to access the parameter passed to a function and can be used to iterate over arguments that are passed into as array
//Note:It is only available within the function

/*function areThereDuplicates() {
    //Create an empty object
    let obj ={}
    let arr = []
    //iterate over the arguments of the function using a for loop
    for(val in arguments){
        //store the the arguments and the number of repitions as keys and values  in the empty object
        obj[arguments[val]]= (obj[arguments[val]] || 0) + 1;
        //console.log(val)// this will give you 0 1 2 3 4 5
        //console.log(arguments[val])// a b c d e r
        console.log(obj[arguments[val]])//  number of repititions
    }
    
    //iterate over the objects values all values must be 1
    for(val in obj){
        if(obj[val] > 1){
            arr.push(val)
            console.log("there are duplicates")
            //console.log(arr)
            //console.log(obj)
            return true
        }
        
    }
    console.log("there are no duplicates")
    return false
    //return true or false
    
}*/


//areThereDuplicates('a','d','c','f','r','e');
//areThereDuplicates('a','s','s','d','f','c','c','l')
//areThereDuplicates(1,2,3,4)
//areThereDuplicates(1,1,2)
//areThereDuplicates(1,'a','s','d','t','t',2,3,4,5,6,2)


//another solution
//this solution has a bug


/*function areThereDuplicates(...args) {
  // Two pointers
  console.log(args.sort((a,b) => a > b));
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}*/


//areThereDuplicates('a','d','c','f','r','e');
//areThereDuplicates('a','s','s','d','f','c','c','l')
//areThereDuplicates('a','s','n','d','f','c','s','l')
//areThereDuplicates('a' , 'b' , 'c' , 'a')
//areThereDuplicates(1,2,3,4)
//areThereDuplicates(1,1,2)



//another solution one liner

function areThereDuplicates() {
  return new Set(arguments).size != arguments.length;
  
}


areThereDuplicates('a','d','c','f','r','e');
//areThereDuplicates('a','s','s','d','f','c','c','l')
//areThereDuplicates(1,2,3,4)
//areThereDuplicates(1,1,2)
//areThereDuplicates(1,'a','s','d','t','t',2,3,4,5,6,2)








//sets are used to remove duplicates every element in the set must be unique
// Use to remove duplicate elements from the array

/*const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]

console.log([...new Set(numbers)])

// [2, 3, 4, 5, 6, 7, 32]*/


//Set objects are collections of values. You can iterate through the elements
//of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection.

//new Set() is a constructor
//.size is used to return the total number of elements in a set 