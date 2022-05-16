


//naive solution

/*Pseudocode
Loop over the longer string
Loop over the shorter string
If the characters don't match, break out of the inner loop
If the characters do match, keep going
If you complete the inner loop and find a match, increment the count of matches
Return the count*/



/*function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
           if(short[j] !== long[i+j]) break;
           if(j === short.length - 1) count++;
        }
    }
    return count;
}

naiveSearch("lorie loled", "lol")*/



//practice

/*function naiveSearch(long, short){
    let count=0;
    //consider any edge cases or constraints
    for(let i=0 ; i < long.length ; i++){
        for(let j = 0; j < short.length ; j++){
            if(long[i+j] !== short[j])break;
            if(j==short.length-1)count++;  
        }
        
    }
    return count;
    //iterate over the long string
    //iterate over the short string
    //if the first characters are similar increment both if not break the inner loop
    //count the number of similarities 
}
*/

//naiveSearch("lorie loled", "lo")
//naiveSearch("lorie loled", "lol")
//naiveSearch("lorie loled", "")
//naiveSearch("", "lol")