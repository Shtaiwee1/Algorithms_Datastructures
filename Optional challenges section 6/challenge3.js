//#4

function averagePair(arr , n){
    //consider any obvious edge cases or constraints
    if(arr.length < 1){
        return false
    }
    //create two consecutive pointers one at 0 and one at 1
    let i=0
    let j =arr.length-1
    //iterate over the numbers of the array
    while(i<j){
        //console.log(i)
        //console.log(j)
       let avg = (arr[j]+arr[i])/2
        //use if condition to compare to the specified averagePair
        if(avg == n){
            return true
            
        }else if(avg < n){
            i++;
        }else{
            j--;
        }
        
        
    }
    //return two or false
    console.log("there are no average pairs")
    return false
    
     
    
    
  
}



//averagePair([1,2,3],2.5) // true
//averagePair([1,3,3,5,6,7,10,12,19],8) // true
//averagePair([-1,0,3,4,5,6], 4.1) // false
//averagePair([],4) // false

