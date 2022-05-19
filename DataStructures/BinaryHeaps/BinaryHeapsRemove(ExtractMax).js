/*
REMOVING FROM A HEAP

Remove the root
Replace with the most recently added
Adjust (sink down)



SINK DOWN?


The procedure for deleting the root from the heap (effectively extracting the maximum element in a max-heap or the minimum element in a min-heap) and restoring the properties is called down-heap (also known as bubble-down, percolate-down, sift-down, trickle down, heapify-down, cascade-down, and extract-min/max).



REMOVE AND SWAP
SINKING DOWN





REMOVING

(also called extractMax)

Swap the first value in the values property with the last one
Pop from the values property, so you can return the value at the end.
Have the new root "sink down" to the correct spot...​
Your parent index starts at 0 (the root)
Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
Find the index of the right child: 2*index + 2 (make sure its not out of bounds)
If the left or right child is greater than the element...swap. If both left and right children are larger, swap with the largest child.
The child index you swapped to now becomes the new parent index.  
Keep looping and swapping until neither child is larger than the element.
Return the old root!


*/

/*
class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);




*/