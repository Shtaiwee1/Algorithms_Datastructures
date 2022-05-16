//Given two strings, write a function to determine if the second string is an anagram of the
//first. An anagram is a word, phrase, or name formed by rearranging 
//the letters of another, such as cinema, formed from iceman.

function Anagram(str1 , str2){
    //comapre the length of the two arrays
    if(str1.length != str2.length){
        return false;
    }
    //create two empty objects
    let obj1 = {};
    let obj2 = {};
    //each object should contain the chracter as a key and the number of occurences as a value
    //iterate over each character in each string using two for loops
    for(let val of str1 ){
        //if the key exists in the object add 1 if not add it and set it to 1
        obj1[val]=(obj1[val] || 0) + 1
        //console.log(obj1)
    }

    for(let valu of str2){
        //if the key exists in the object add 1 if not add it and set it to 1
        obj2[valu]=(obj2[valu] || 0) + 1
        //console.log(obj2)
    }
    
    
    //use a third for loop to compare between the keys and values in both objects
    for(let key in obj1){
        //console.log(obj1[key])
        //console.log(obj2[key])
        console.log(key)

        //if the key in object 1 doesn't exist in the keys of object 2 or value of the same key in object 1 doesn't match the value of the same key in object 2(they don't have the same number of occurences) return false
        if(!(key in obj2) || obj1[key] != obj2[key]){     
             console.log("these are not anagrams" + " " + `${str1}`+ " " + `${str2}`)
            return false;
            //console.log(key)
        }
        
        
    }
    console.log("these are anagrams" + " " + `${str1}`+ " " + `${str2}`)
        return true;
    //return true or false
    
    
    
}

//Anagram("cinema" , "iceeman");
//Anagram("cinema" , "icema");
//Anagram("cin" , "nic");
//Anagram("cinn" , "cinm");




