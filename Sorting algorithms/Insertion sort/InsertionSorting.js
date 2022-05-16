/*Insertion Sort pseudocode

Start by picking the second element in the array
Now compare the second element with the one before it and swap if necessary.
Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
Repeat until the array is sorted.
    */


/**
function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

insertionSort([2,1,9,76,4])
*/







//practice

function insertionSort(arr){
	//the frist for loop will iterate from the first element to the last
	//the second for loop will begin one elemenet earlier from the first loop and decrement to the beginning of the array
	//if the element is bigger will move to the right if not we will insert the current value
	for(let i=1 ;i < arr.length ; i++ ){
		currentVal = arr[i];
		for(var j=i-1 ; j>=0 && arr[j] > currentVal ; j-- ){
			arr[j+1] = arr[j]
			
		}
		arr[j+1] = currentVal;
	}
	
	return arr;
}




insertionSort([2,1,9,76,4])
//[2,2,9,76,4]
//[1,2,9,76,4]

//i is 1 and j is  2
//j is bigger than currentVal wich is 1
// so arr[j+1] which is 1 will become 2
//now j-- will bring j to the value of -1
//breaks the for loop because j is no longer <=0
//then arr[j+1] which is 0 will be the currentVal which is 1
//and so on

