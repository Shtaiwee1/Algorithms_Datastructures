/*function sumRange(num){
   if(num === 1) return 1; 
   return num + sumRange(num-1);
}*/

//sumRange(3) 
    // return 3 + sumRange(2) ------> return 3+3
           //return  2 + sumRange(1) ------>return 2+1 
               //  return 1


//sumRange(3) keeps waiting until the recursion hits an endpoint and every return value in determined
// you can use the call stack to see the process step by step



//Writing a factorial iteratively


/*function factorial(num){
   //create a var called total
   let total = 1;
   //determine the base case
   
   //write a for loop to multiply all the numbers until you reach 1
   for(let i = num ; i > 0 ; i--){
      if(i == 1 ){
      return total
   }
      total *= i
   }
   // return the total
}*/

//factorial(3)



//Refactor

/*function factorial(num){
   let total =1;
   for(let i=num ; i > 0 ; i-- ){
      total *= i;
   }
   return total
   
}

factorial(3)*/


//write it recursively

function factorial(num){
   if(num === 1)return 1;
   return num * factorial(num-1)
}
                  
 factorial(5)          



//things goes wrong in recursion when:
//-Forgetting to retun something or returning the wrong thind
//-stack overflow
//-No base case
                                