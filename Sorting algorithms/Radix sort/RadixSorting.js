/*
Bubble Sort - O(n^2)
Insertion Sort - O(n^2)
Selection Sort - O(n^2)
Quick Sort - O(n log (n))
Merge Sort - O(n log (n))
COMPARISON SORTS

Average Time Complexity


Can we do better?

    */





/*
RADIX SORT
Radix sort is a special sorting algorithm that works on lists of numbers

It exploits the fact that information about the size of a number is encoded in the number of digits.  

More digits means a bigger number!

It never makes comparisons between elements!
*/







/*
RADIX SORT HELPERS
In order to implement radix sort, it's helpful to build a few helper functions first:

digitCount(num) - returns the number of digits in num

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

*/


/*
In order to implement radix sort, it's helpful to build a few helper functions first:

mostDigits(nums) - Given an array of numbers, returns the number of digits in the largest numbers in the list

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}
*/






/*
RADIX SORT PSEUDOCODE
Define a function that accepts list of numbers
Figure out how many digits the largest number has
Loop from k = 0 up to this largest number of digits
For each iteration of the loop:
Create buckets for each digit (0 to 9)
place each number in the corresponding bucket based on its kth digit
Replace our existing array with values in our buckets, starting with 0 and going up to 9
return list at the end!

*/



//Implementation

/*
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

radixSort([23,345,5467,12,2345,9852])

*/






