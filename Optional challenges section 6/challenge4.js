//#5



/*function isSubsequence(str1 , str2) {
    //consider any obvious edge cases or constraints
  if(str1.length == 0)return true;
  if(str2.length == 0)return false;

  //create two indices
  let i = 0;
  let j= 0
  //iterate over the second string and compare with the first string
  //if the second index reached the last character in the string return false
  while(j < str2.length){
    //if they are equal increment both of them but if they are not increment the second index
    if(str1[i] == str2[j]){
      i++;
      if(i == str1.length)return true;
      j++;
    }else{
      j++;
    }  
    
  }
    return false; 
}*/


//Refactor

/*function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}*/





//Your solution MUST have AT LEAST the following complexities:
//Time Complexity - O(N + M)
//Space Complexity - 0(1)



//Space complexity not O(1)

//Another solution
/*function isSubsequence(str1, str2) {
  //if the first string is empty return true
  if(str1.length === 0) return true;
  //if the second string is empty return false
  if(str2.length === 0) return false;
  //if the first characters are similar remove them and call the function again and if they are not remove the first character of the second string and leave the first string as it is then call the function again
  if(str1[0] == str2[0]){
    return isSubsequence(str1.slice(1), str2.slice(1))// in the slice operation the end is not included so when we say slice(1) it will remove 0 only
  }
  return isSubsequence(str1, str2.slice(1))
}*/



//isSubsequence( 'hello' ,'hello world'); // true
//isSubsequence( 'sing', 'sting'); // true
//isSubsequence( 'abc','abracadabra'); // true' abc'
//isSubsequence( ' abc ' ,' acb'); // false (order matters)
//isSubsequence( 'sing', 'tsing'); // true
