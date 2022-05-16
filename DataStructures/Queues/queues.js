
/*
WHAT IS A QUEUE?
A FIFO data structure!

First In First Out
*/

/*
WE'VE SEEN THIS BEFORE
Queues exist everywhere! Think about the last time you waited in line....

How do we use them in programming?

Background tasks
Uploading resources
Printing / Task processing
*/

/*
BUILDING A QUEUE WITH AN ARRAY
*/

/*
A Queue Class
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
}

*/

/*
Enqueue
Adding to the beginning of the Queue!

Remember, queues are a FIFO data structure


Enqueue Pseudocode
This function accepts some value
Create a new node using that value passed to the function
If there are no nodes in the queue, set this node to be the first and last property of the queue
Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
Increment the size of the queue by 1
*/

/*
Dequeue
Removing from the beginning of the Queue!

Remember, queues are a FIFO data structure


Dequeue pseudocode
If there is no first property, just return null
Store the first property in a variable
See if the first is the same as the last (check if there is only 1 node). If so, set the first and last to be null
If there is more than 1 node, set the first property to be the next property of first 
Decrement the size by 1
Return the value of the node dequeued
*/

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


class Queue{
    constructor(){
        this.first = null;
        this.last = null; 
        this.size = 0;
    }

    queue(val){
        //create a node using the inserted val
        let newNode = new Node(val);
        //if the list is empty set first and last to the newnode
        if(this.size === 0){
            this.first = newNode;
            this.last = newNode
        }else{
            //else set the next property for last to the newnode
        //set the last to the newnode
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
        //increment the size and return it
    }

    dequeue(){
        //check if the list is empty return undefined
        if(this.size === 0) return undefined
        //check if length is 1 set last to null
        if(this.first === this.last) {
            this.last = null;
        }
        //store first in a new variable
        let temp = this.first;
        //set the next preoperty to the the first to be the new first
        this.first = this.first.next
        //set the next property to the old first to null;
        temp.next = null;
        //decrement the length and return the removed value
        this.size--;
        return temp;
    }
}


let test = new Queue();













































































/*
BIG O of QUEUES
Insertion -   O(1)

Removal -   O(1)

Searching -   O(N)

Access -   O(N)








RECAP
Queues are a FIFO data structure, all elements are first in first out.
Queues are useful for processing tasks and are foundational for more complex data structures
Insertion and Removal can be done in O(1)
*/