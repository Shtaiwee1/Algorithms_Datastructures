
/*function power(num1 , num2){
    //consider any edge cases or constraints
    //create a var called result
    let result = 1;
    //create a for loop in which the number of loops equals the second number
    for(let i=1 ; i <=num2 ; i++){
         //every loop the number must be multiplied by itself and the result is added to the result var
        result *= num1;
    }
    return result;
    
}

//power(2 , 0)
//power(2 , 2)
power(2 , 4)*/


//Recursive solution

/*function power(num1 , num2){
   let result = 1;
    if(num2 === 0)return result

   function multiply(num1 , num2){
      if(num2 === 0)return result
    result *= num1
      return multiply(num1 , num2-1)
      }
   
   
   return multiply(num1 , num2)
    
}*/


//power(2 , 0)
//power(2 , 2)
//power(2 , 4)


//solution
/*function power(num1 , num2){
   if (num2 ===0) return 1
   return num1 * power(num1 , num2 -1)
}
power(2 , 4)*/
//2* power(2 , 3) = 2*8 = 16
//2* power(2,2) = 2*4 = 8
//2*power(2 , 1) = 2*2 = 4
//2* power( 2 ,0) = 2*1 =2

//******************************************************************

//Factorial question
/*function factorial(num){
   if(num < 0)return 0;
   if (num==1)return 1
   return num * factorial(num-1)
   
}


factorial(4) // 24
factorial(7) // 5040*/
//***********************************************

//Product of array
/*function productOfArray(arr){
   //consider any edge cases or constraints
   if(arr.length === 0) return 0;
   if(arr.length === 1)return arr[0];
   //create a var to store the value of the multiplied numbers
   let result =1;
   //use a for loop to iterate over the array
   for (val of arr){
      result *= val
   }
   //return the result
   return result
   
}*/

 //productOfArray([1,2,3]) // 6
 //productOfArray([1,2,3,10]) // 60


//Using recursion


/*function productOfArray(arr){
 if(arr.length === 0) return 1
  return arr[0] * productOfArray(arr.slice(1))
 //1 * productOfArray(2 , 3) = 6*1 =6
 //2 * productOfArray(3) = 2*3 =6
 //3 * 1 = 3
 
}*/

//productOfArray([1,2,3]) // 6
 //productOfArray([1,2,3,10]) // 60


//***************************************************


/*function recursiveRange(num){
 if( num ===0) return 0;
 return num + recursiveRange(num-1)
   
}*/


 //recursiveRange(6) // 21
 //recursiveRange(10) // 55 


//*****************************************************

//non recursive solution
/*
function fib(num){
 //create a fibonacci array with the beginning of 1,1
 let arr = [1,1];
  // consider any edge cases or constraints
 if(num === 0)return 0;
 //every two numbers must result in the number after them
 let i = 0
while(num > arr.length){
 result = arr[i] + arr[i+1]
 arr.push(result)
 i++;
}
 return arr[arr.length -1]
}
*/

 //fib(4) // 3
 //fib(10) // 55
 //fib(28) // 317811
 //fib(35) // 9227465


//******************************************************************

//recursive solution

/*function fib(num){
 if(num <= 2) return 1;
 return fib(num - 1) + fib ( num - 2)
 
}*/

