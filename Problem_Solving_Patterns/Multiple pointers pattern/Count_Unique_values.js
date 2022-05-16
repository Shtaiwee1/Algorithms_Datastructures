//Implement a function called countUniqueValues, which accepts a sorted array,
//and counts the unique values in the array. There can be negative numbers
   // in the array, but it will always be sorted.

function countUniqueValues (arr){
    //create two pointers one at 0 and one after it
    let a = 0;
    let b = a+1;
    let counter = 0
   //new empty array
   let arr2 =[]
    //iterate through the array
    for(let i=0 ; i<arr.length ; i++){
        if(arr[a] != arr [b]){
           //if the values are not equal and the value does not exist in arr2 add it to arr 2
           if(!(arr2.includes(arr[a]))){
            arr2.push(arr[a]);
              }
           //if their values are different increament the counter by 1
            counter++;
            arr[a+1]=arr[b]
           //increment each of them by 1
            a++;
            b++;
           
            //if their values are equal increment the second pointer only
        }else if (arr[a] == arr [b]){
          
           b++;
            
        }
    }
    console.log(a);
           console.log(b);
   return console.log("The count is " + " " + `${counter}` + " " + "unique values are" + " " + `${arr2}`)  
}


//countUniqueValues ([1,1,1,1,1,2])
//countUniqueValues ([1,2,3,4,4,4,7,7,12,12,13])
//countUniqueValues ([1,2,1,1,1,2])
//countUniqueValues ([1,1,1,1,1,2])