//Write a function which takes in a string and returns counts of each character in the string


/*function countChar(str){
    //Create a new empty object to store keys and values inside
    let a = {}
    //Iterate through each character in the string
    for(let i=0 ; i<str.length ; i++){
        console.log(str[i])// you can use str.charAt(i)
        let b= str[i].toLowerCase()
        
        //If it's not an alphanumeric character do nothing
        if(/[a-z0-9]/.test(b)){
        //If it exists as a key in the object increment the value by 1
        if(a[b]>0){
            a[b]++
        //If the character doesn't exist in the object as a key add it as a key and set value to 1
        }else{
            a[b]=1
        } 
            }
    }
    //Return the final object  
    return a;
}


//countChar("Hello");
//countChar("Hello hThere");
countChar("Hello 123");*/


//Refactor1

/*function countChar(str){
    //Create a new empty object to store keys and values inside
    let a = {}
    //Iterate through each character in the string
    for(var b of str){
        //console.log(b)// you can use str.charAt(i)
        b=b.toLowerCase()
        
        //If it's not an alphanumeric character do nothing
        if(/[a-z0-9]/.test(b)){
            
        //If it exists as a key in the object increment the value by 1
        if(a[b]>0){
            a[b]++
        //If the character doesn't exist in the object as a key add it as a key and set value to 1
        }else{
            a[b]=1
        } 
            }
    }
    //Return the final object  
    return a;
}


//countChar("Hello");
countChar("HHHello hThere");
//countChar("Hello 123");*/


//Refactor2

/*function countChar(str){
    //Create a new empty object to store keys and values inside
    let a = {}
    //Iterate through each character in the string
    for(var b of str){
        //console.log(b)// you can use str.charAt(i)
        b=b.toLowerCase()
        
        //If it's not an alphanumeric character do nothing
        if(/[a-z0-9]/.test(b)){
            
        //If it exists as a key in the object increment the value by 1
            a[b]=++a[b] || 1;//Used short circuit evaluation instead of if conditional for readability
        
        //If the character doesn't exist in the object as a key add it as a key and set value to 1
        
        } 
            }
     //Return the final object
    return a;
    }*/
     
    



//countChar("Hello");
//countChar("HHHello hThere");
//countChar("Hello 123");

//You can use ES 2015 let or const instead of var


//Refactor3

function countChar(str){
    //Create a new empty object to store keys and values inside
    let a = {}
    //Iterate through each character in the string
    for(var b of str){
        //console.log(b)// you can use str.charAt(i)
        b=b.toLowerCase()
        
        //If it's not an alphanumeric character do nothing
        if(isAlphaNumeric(b)){
            
        //If it exists as a key in the object increment the value by 1
            a[b]=++a[b] || 1;//Used short circuit evaluation instead of if conditional for readability
        
        //If the character doesn't exist in the object as a key add it as a key and set value to 1
        
        } 
            }
    //Return the final object  
    return a;
    }
    
//another function used to test for alphanumeric instead of regular expression 55% better time complexity than RegEx
function isAlphaNumeric(b){
    let code = b.charCodeAt(0);
//if any of the conditions is false that means that thedigit suits the standard and return true //else if all three are true that means the digit exists in none of them and it is a non alphanumeric and return false
    if(!(code > 47 && code < 58)&&//numeric 0-9
      !(code > 64 && code <91)&& // upper alpha (A-Z)
      !(code > 96 && code < 123)){ //lower Alpha (a-z) 
        return false;
      }
    return true;
}

//countChar("Hello");
countChar("HHHello hThere");
//countChar("Hello 123");











