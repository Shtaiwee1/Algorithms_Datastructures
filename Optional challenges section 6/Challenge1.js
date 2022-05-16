//#2

function sameFrequency(int1 , int2){
    
    //convert numbers to strings
    let str1 = int1.toString()
    let str2 = int2.toString()
    //console.log(str1)
    //consider any obvious edge cases
  if(str1.length !== str2.length){
    return false;
  }
    
  //Create a new object
  let obj ={}
    //iterate over each character in the first number
  for(val of str1){
    //store the characters as keys in the object and number of occurences as values
    obj[val] = (obj[val] || 0 ) + 1
  }
  //console.log(obj)
    
    //iterate over the second number
  for(val of str2){//check for every key if it exists in the object or not
    if(!obj[val]){
      return false;
    }else{
      //if it does substract 1
      obj[val]--;
    }
  }
  //return true or false
  return true;
    
    
    
    
    
}

//sameFrequency(182 , 281)
//sameFrequency(34 , 14)
sameFrequency(3589578 , 5879385)
//sameFrequency(22 , 222)