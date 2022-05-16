/*
Unshifting pseudocode
Let's visualize this!

This function should accept a value
Create a new node using the value passed to the function
If there is no head property on the list, set the head and tail to be the newly created node
Otherwise set the newly created node's next property to be the current head property on the list
Set the head property on the list to be that newly created node
Increment the length of the list by 1
Return the linked list

*/

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
            
        }
        this.length++;
        return this;
    }

    pop(){
        let newTail = this.head
        let current = this.head
        if(!this.head) return undefined
        while(current.next){
            newTail=current
            current = current.next
        }
        //if(this.length == 1){ 
          //  this.head = null;
           // this.tail = null;
           // this.length=0;
        
        this.tail = newTail
        this.tail.next = null;
        this.length--;
        if(this.length === 0){// here the if conditional must be after the decrement of the length otherwise it will not be set to null until the length reaches 0 not 1
            this.head = null; // otherwise if you want it above the condition must be as shown above length ===1
            this.tail = null;
        }
        return current   
    }

    shift(){
        //save the head to a variable to return it later
        let oldHead = this.head;
        //assign the head value to the next node
        this.head = oldHead.next
        //decrement the length by 1
        this.length--;
        //consider the length of 0 linkedlist and assign both head and tail to null;
        if(this.length === 0 ){
            this.head = null;
            this.tail = null;
        }
        //return the removed head
        return oldHead
    }

    unshift(val){
        //create a new node using the inserted value
        let newNode = new Node(val)
        //consider the case if there is no head
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
        //set the next property for the newNode to the head
        newNode.next = this.head
        //set the head to the new node
        this.head = newNode;
        //increment the length by 1
        
        }
        //if(this.length === 0){//if the length is 0 consider edge case set both head and tail to null here we don't need an edge case for adding to the list
           // this.head = null;// when we add in push and unshift we don't need this condition just for removing
            //this.tail = null;
        //}
        this.length++;
        return this;
        //return the list
    }

    
}


let list = new SinglyLinkedList()
