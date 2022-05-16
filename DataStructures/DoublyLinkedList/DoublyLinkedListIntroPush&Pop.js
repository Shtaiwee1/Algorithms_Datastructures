
/*
PUSHING
Adding a node to the end of the Doubly Linked List
*/

/*
POPPING
Removing a node from the end of the Doubly Linked List
*/

/*
Pushing pseudocode
Let's visualize this!

Create a new node with the value passed to the function
If the head property is null set the head and tail to be the newly created node 
If not, set the next property on the tail to be that node
Set the previous property on the newly created node to be the tail
Set the tail to be the newly created node
Increment the length
Return the Doubly Linked List
*/

/*
Popping pseudocode
If there is no head, return undefined
Store the current tail in a variable to return later
If the length is 1, set the head and tail to be null
Update the tail to be the previous Node.
Set the newTail's next to null
Decrement the length
Return the value removed
*/




class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null; // this is the only difference in the main skeleton between singly and doubly
    }
}


class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        //create a new node using the inserted value
        let newNode = new Node(val)
        //check for the empty List
        if(this.length === 0){ // you can check for an empty list using (this.length===0) condition or (!this.head)  or (!this.tail)
        //if the list is empty set the head and tail to the newNode
            this.head = newNode;
            this.tail = newNode;
        }else{
        //if not set the next for the tail to the new node
            this.tail.next = newNode;
        //set the prev for the new node to the old tail
            newNode.prev = this.tail;
        //set the old tail to new node
            this.tail=newNode;  
        }
        //increment the length by 1 and return the list
        this.length++;
        return this;
    }

    pop(){
        //create a new variable called poppedNode and set it to tail to return the popped item later
        let poppedNode = this.tail;
        //check for empty list retun undefined
        if(!this.head) return undefined;
        //check if the length is 1 set head and tail to null
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
        //else set the tail to the popped item previous node
            this.tail = poppedNode.prev;
        //set the next property for the new tail to be null
            this.tail.next = null;
        //set the prev property for the poppedNode to be null
            poppedNode.prev = null;
       
        }
         //decrement the length and return the popped item
        this.length--; //these steps must be outside of the else statement so the length will decrement even if the length is 1
        return poppedNode;
    }
}




let list = new DoublyLinkedList()

//always check if the solution is correct in the console





