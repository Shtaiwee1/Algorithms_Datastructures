/*
SHIFTING
Removing a node from the beginning of the Doubly Linked List
*/

/*
UNSHIFTING
Adding a node to the beginning of the Doubly Linked List
*/

/*
Shifting pseudocode
Let's visualize this!

If length is 0, return undefined
Store the current head property in a variable (we'll call it old head)
If the length is one
set the head to be null
set the tail to be null
Update the head to be the next of the old head
Set the head's prev property to null
Set the old head's next to null
Decrement the length
Return old head
*/

/*
Unshifting pseudocode
Create a new node with the value passed to the function
If the length is 0
Set the head to be the new node
Set the tail to be the new node
Otherwise
Set the prev property on the head of the list to be the new node
Set the next property on the new node to be the head property 
Update the head to be the new node
Increment the length
Return the list
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

    shift(){
        //create a variable to store the old head to return it later
        let oldHead = this.head;
        //check if the length is 0 return undefined
        if(this.length === 0 ) return undefined;
        //check if the length is 1 set head and tail to null
        if (this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
        //else set the next property for the old head to be the new head
            this.head = oldHead.next
        //set old head next property to null
            oldHead.next = null;
        //set the new head prev property to null
            this.head.prev = null;
        }
        //decrement te length and returrn the old head
        this.length --;
        return oldHead;
    }

    unshift(val){
        //create a new node using the inserted value
        let newNode = new Node(val)
        //check if the list is empty set the head and tail to the new node
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
        //else set the next property for the new node to be the head
            newNode.next = this.head
        //set the prev property for the head to be the new ndoe
            this.head.prev = newNode;
        //set the head to the new node
            this.head = newNode;
        }
        //increment the length and return the list
        this.length++;
        return this;
        
    }
}




let list = new DoublyLinkedList()