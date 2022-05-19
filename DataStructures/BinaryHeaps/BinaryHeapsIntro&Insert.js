/*
WHAT IS A BINARY HEAP?
Very similar to a binary search tree, but with some different rules!

In a MaxBinaryHeap, parent nodes are always larger than child nodes. In a MinBinaryHeap, parent nodes are always smaller than child nodes
*/




/*
MAX BINARY HEAP
Each parent has at most two child nodes
The value of each parent node is always greater than its child nodes
In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes.
A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first
*/

/*
Why do we need to know this?
Binary Heaps are used to implement Priority Queues, which are very commonly used data structures

They are also used quite a bit, with graph traversal algorithms
*/



/*
For any index of an array n...

The left child is stored at 2n + 1

The right child is at 2n + 2
*/



/*
For any child node at index  n...

Its parent is at index (n-1)/2
*/

//Insert 



/*
INSERT PSEUDOCODE
Push the value into the values property on the heap
Bubble Up:
Create a variable called index which is the length of the values property - 1
Create a variable called parentIndex which is the floor of (index-1)/2
Keep looping as long as the values element at the parentIndex is less than the values element at the child index
Swap the value of the values element at the parentIndex with the value of the element property at the child index
Set the index to be the parentIndex, and start over!
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


//practice

class MaxBinaryHeap{
    constructor(){
        this.values=[41,39,33,18,27,12]
    }

    insert(element){
        //push the element into the values array in order to be the last member in the array
        this.values.push(element);
        //fier the bubble function to place the element correctly in the heap
        this.bubbleUp()
        
    }

    bubbleUp(){
        //determine the last element index and store it in a variable
        let idx = this.values.length - 1;
        // store the element at that index in a variable called element
        let element = this.values[idx];
        //create a while loop that will keep running as long as the element keeps going up if it was always smaller than the parent, until index is reaches index 0
        while(idx > 0){
        //determine the indedx of the parent using the quation (n-1)/2 floored and store it in a variable
            let parentIdx = Math.floor((idx - 1)/2);
        //store the element at that index in a variable called parent
            let parent = this.values[parentIdx];
        //if element is smaller than parent break the loop don't do anything
            if(element < parent) break;
        //if the element is bigger than the parent store the element in the parent index to element and the element at parent index to the element(swap the values of the parent and element)
            this.values[parentIdx] = element
             this.values[idx] = parent // pay attention to the swap meaning here
            idx = parentIdx
        //update the indexx of the element for the next loop(we don't update the index of the parent because it will be determined in the next loop using n-1/2 )
            
        }
        return this.values;
        
        //return the heap array (this.values)
        
    }

    
}




let heap = new MaxBinaryHeap();