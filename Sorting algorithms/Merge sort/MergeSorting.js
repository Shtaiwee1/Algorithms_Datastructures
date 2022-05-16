/*WHY LEARN THIS?
The sorting algorithms we've learned so far don't scale well
Try out bubble sort on an array of 100000 elements, it will take quite some time!
We need to be able to sort large arrays more quickly*/

/*FASTER SORTS
There is a family of sorting algorithms that can improve time complexity from O(n  ) to O(n log n)
There's a tradeoff between efficiency and simplicity
The more efficient algorithms are much less simple, and generally take longer to understand
Let's dive in!*/


/*Merge Sort
It's a combination of two things - merging and sorting!
Exploits the fact that arrays of 0 or 1 element are always sorted
Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array*/

/*Merging Arrays
In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays
This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.*/


/*Merging Arrays Pseudocode
Create an empty array, take a look at the smallest values in each input array
While there are still values we haven't looked at...
If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
Once we exhaust one array, push in all remaining values from the other array*/

/*mergeSort Pseudocode
Break up the array into halves until you have arrays that are empty or have one element
Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
Once the array has been merged back together, return the merged (and sorted!) array*/

//mergin two sorted arrays


/*// Merges two already sorted arrays
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}
merge([100,200], [1,2,3,5,6])

                   */


//practice




function mergeSort(arr){
    if(arr.length <= 1)return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0 , mid)) ;
    let right = mergeSort(arr.slice(mid)) ;
    return merge(left , right); //don't forget the return word here otherwise the function will never stop and will kepp calling the merge function
}


mergeSort([10,24,12,50])



function merge(arr1 , arr2){
    //consider any edge cases or constraints 
    //create an empty array and two indeces at 0
    let results =[];
    let i=0;
    let j=0;
    //iterate over the first array with the condition of the index not exceeding the length of the array 
        while( i < arr1.length && j < arr2.length){
        //compare each element in both arrays
        //if the element is smaller push it to the results new array and increment the index by one and for the bigger one do nothing 
        if(arr1[i] >= arr2[j]){
            results.push(arr2[j])
            j++;
        }else{
            results.push(arr1[i])
            i++;
        } 
    }
    //keep doing this until one of the arrays reaches the end and then push the other array elements into the results array
    //these two while loops where added to push the other arrays elements into results because if they doesn't exist nothing will be done after breaking from the while looop so they will catch any array that still didn't reach it's length and push it's elements into results
    while( i < arr1.length){
        results.push(arr1[i])
            i++;
    }
    while( j < arr2.length){
        results.push(arr2[j])
            j++;
    }
    //return the resukts array
    return results;
}
//merge([100,200], [1,2,3,5,6])




/*
// The code without pseudocode
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

// Recrusive Merge Sort
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));  //returns an array from the first element included to the mid excluded
    let right = mergeSort(arr.slice(mid));  //returns an array from the mid included to the last element
    return merge(left, sright);  //merges two arrays 
}

mergeSort([10,24,76,73])
*/















