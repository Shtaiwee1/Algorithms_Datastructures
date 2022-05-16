//Solution with one object

function Anagram(str1 , str2){
    //compare the length of the two arrays
    if (str1.length != str2.length){
        return false;
    }
    //create an empty object where the keys will be each character and the values will be the number of occurences
    let obj = {}
    //iterate over the first string and the store characters and repititions in the object
    for(let val of str1){
        obj[val] ? obj[val] +1 : obj[val]=1
        console.log(obj);
    }
    //iterate over second string and compare the characters and number of occurences with the object
    //if the character doesn't exist in the object return false
    for(let val of str2){
        if(!obj[val]){
            return false
        }else{
            obj[val]--
        }
    }
    return true;
    // return true or false
}

//Anagram("cinema" , "cinema")
//Anagram("cinemak" , "cinema")
Anagram("cin" , "nic")
