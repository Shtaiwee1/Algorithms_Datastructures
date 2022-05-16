


function count(arr){
    let i= 0 ;
    for(let j=1 ; j<arr.length ; j++){
        if(arr[i] != arr[j]){
            i++;
            arr[i]=arr[j]
        }
    }
    return i+1
    
}

//count ([1,1,1,1,1,2])
count ([1,2,3,4,4,4,7,7,12,12,13])
//count ([1,2,1,1,1,2])